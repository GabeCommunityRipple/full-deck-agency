import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { createClient } from "@/lib/supabase/server";
import ContactNotification from "@/emails/ContactNotification";

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
      // legacy fields for backward compat
      name,
      company,
      service_interest,
    } = body;

    const displayName = name || `${first_name ?? ""} ${last_name ?? ""}`.trim();
    const displayEmail = email;

    if (!displayName || !displayEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = await createClient();
    await supabase.from("leads").insert({
      name: displayName,
      email: displayEmail,
      phone: phone || null,
      company: company || industry || null,
      service_interest: service_interest || industry || null,
      message: message || `Website: ${website || "N/A"} | Industry: ${industry || "N/A"}`,
      status: "new",
    });

    await resend.emails.send({
      from: "Full Deck Agency <noreply@fulldeckagency.com>",
      to: ["info@fulldeckagency.com"],
      subject: `New Lead: ${displayName} — ${industry || service_interest || "General Inquiry"}`,
      react: ContactNotification({
        name: displayName,
        email: displayEmail,
        phone,
        company: company || industry,
        service_interest: service_interest || industry,
        message: message || `Website: ${website || "N/A"}`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
