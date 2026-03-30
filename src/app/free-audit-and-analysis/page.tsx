import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Free Marketing Audit & Analysis",
  description:
    "Get a free digital marketing audit and analysis for your home service business from Full Deck Agency.",
};

export default function FreeAuditPage() {
  return (
    <>
      <section className="relative py-16 bg-brand-dark flex items-center min-h-[220px]">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <Container className="relative z-10">
          <div className="max-w-xl bg-white/95 rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-brand-dark-gray mb-2">
              Free Audit &amp; Analysis
            </h1>
            <p className="text-gray-500">
              Find out exactly where your marketing stands — and how to improve it.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-gray mb-2">
                What You'll Get
              </h2>
              <span className="section-divider" />
              <ul className="space-y-3 text-gray-600">
                {[
                  "SEO audit: keyword rankings, technical issues, and local visibility",
                  "Google Ads performance review (if running campaigns)",
                  "Website conversion rate analysis",
                  "Competitor comparison in your market",
                  "Custom recommendations to grow leads and revenue",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-red text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-500 text-sm">
                No obligation. No cost. Just honest, expert analysis.
              </p>
            </div>
            <div className="bg-brand-light-gray rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-brand-dark-gray mb-4">
                Request Your Free Audit
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
