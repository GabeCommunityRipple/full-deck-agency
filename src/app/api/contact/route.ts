import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "gabe@fulldeckagency.com";

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
    } = body;

    const displayName = name || `${first_name ?? ""} ${last_name ?? ""}`.trim();
    const displayEmail = email;

    if (!displayName || !displayEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build a plain HTML email (avoids react-email version conflicts)
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

    // Try Supabase insert (don't let it block email)
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

    // Send notification email to Gabe
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

    // Send confirmation to the person who submitted
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

    // Return success if at least one thing worked
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
