import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "gabe@fulldeckagency.com";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitMap = new Map<string, number[]>();

function getClientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const fresh = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (fresh.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  rateLimitMap.set(ip, fresh);
  if (rateLimitMap.size > 1000) {
    for (const [k, v] of rateLimitMap) {
      const kept = v.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (kept.length === 0) rateLimitMap.delete(k);
      else rateLimitMap.set(k, kept);
    }
  }
  return false;
}

// Flags 10+ char tokens with no spaces that are either vowel-starved
// or have unrealistic case-flip density (e.g. "DzBEQsjOnrASKzCFms").
function looksRandom(raw: string): boolean {
  const s = raw.trim();
  if (s.length < 10 || /\s/.test(s)) return false;
  const letters = s.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 10) return false;
  const vowels = (letters.match(/[aeiouAEIOU]/g) ?? []).length;
  if (vowels / letters.length < 0.2) return true;
  let transitions = 0;
  for (let i = 1; i < letters.length; i++) {
    if (/[A-Z]/.test(letters[i - 1]!) !== /[A-Z]/.test(letters[i]!)) {
      transitions++;
    }
  }
  if (transitions / letters.length > 0.4) return true;
  return false;
}

function validEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function validPhone(s: string): boolean {
  return (s.match(/\d/g) ?? []).length >= 7;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      first_name,
      last_name,
      phone,
      email,
      website,
      industry,
      message,
      name,
      company,
      service_interest,
      company_website,
      form_render_time,
    } = body;

    const ip = getClientIp(request.headers);

    // Honeypot: return success so the bot doesn't retry with variations.
    if (company_website && String(company_website).trim() !== "") {
      console.warn("[contact] honeypot tripped", { ip });
      return NextResponse.json({ success: true });
    }

    // Timing: require the form to have been on screen for >= 2s and < 24h.
    const ts = Number(form_render_time);
    const elapsed = Date.now() - ts;
    if (!Number.isFinite(ts) || ts <= 0 || elapsed < 2000 || elapsed > 86_400_000) {
      console.warn("[contact] timing check failed", { ip, ts, elapsed });
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many submissions" }, { status: 429 });
    }

    const displayName = name || `${first_name ?? ""} ${last_name ?? ""}`.trim();
    const displayEmail = email;

    if (!displayName || !displayEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!validEmail(String(displayEmail))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (phone && !validPhone(String(phone))) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    // Gibberish check on free-text fields; silent drop so bots don't tune their output.
    const suspects = [first_name, last_name, displayName, message].filter(Boolean);
    if (suspects.some((v) => looksRandom(String(v)))) {
      console.warn("[contact] gibberish detected", { ip, displayName });
      return NextResponse.json({ success: true });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #c0392b; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Lead — Full Deck Agency</h1>
        </div>
        <div style="background-color: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${displayName}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${displayEmail}</td></tr>
            ${phone ? `<tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ""}
            ${company || industry ? `<tr><td style="padding: 8px 0;"><strong>Industry:</strong></td><td>${company || industry}</td></tr>` : ""}
            ${service_interest || industry ? `<tr><td style="padding: 8px 0;"><strong>Service Interest:</strong></td><td>${service_interest || industry}</td></tr>` : ""}
            ${website ? `<tr><td style="padding: 8px 0;"><strong>Website:</strong></td><td>${website}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background-color: #f9fafb; border-radius: 6px;">
            <strong>Message:</strong><br/>${message || "No message provided"}
          </div>
        </div>
      </div>
    `;

    let supabaseError = null;
    try {
      const { createClient } = await import("@/lib/supabase/server");
      const supabase = await createClient();
      const { error } = await supabase.from("leads").insert({
        name: displayName,
        email: displayEmail,
        phone: phone || null,
        company: company || industry || null,
        service_interest: service_interest || industry || null,
        message: message || `Website: ${website || "N/A"} | Industry: ${industry || "N/A"}`,
        source: "fulldeckagency.com",
        status: "new",
      });
      if (error) supabaseError = error;
    } catch (err) {
      supabaseError = err;
      console.error("Supabase error:", err);
    }

    let emailError = null;
    try {
      const { error } = await resend.emails.send({
        from: "Full Deck Agency <noreply@mail.fulldeckagency.com>",
        to: [CONTACT_EMAIL],
        subject: `New Lead: ${displayName} — ${industry || service_interest || "General Inquiry"}`,
        html: htmlBody,
      });
      if (error) emailError = error;
    } catch (err) {
      emailError = err;
      console.error("Resend email error:", err);
    }

    try {
      await resend.emails.send({
        from: "Full Deck Agency <noreply@mail.fulldeckagency.com>",
        to: [displayEmail],
        subject: "Thanks for reaching out — Full Deck Agency",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <h2>Thanks for reaching out, ${displayName}!</h2>
            <p>We received your message and will get back to you within 1 business day.</p>
            <p>In the meantime, feel free to call us at any time.</p>
            <p>— The Full Deck Agency Team</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Confirmation email error:", err);
    }

    if (supabaseError && emailError) {
      console.error("Both Supabase and email failed:", { supabaseError, emailError });
      return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
