import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Full Deck Agency | Home Services Marketing",
  description:
    "Is your company working with a full deck? Full Deck Agency helps home service businesses grow with proven digital marketing.",
};

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <Container className="relative z-10 py-16">
          <div className="max-w-xl bg-white/95 rounded-lg shadow-xl p-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-brand-dark-gray">
              Is Your Company Working With a{" "}
              <span className="text-brand-red">Full Deck?</span>
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Full Deck Agency helps home service and construction businesses
              dominate their local market with proven digital marketing strategies.
            </p>
            <Link
              href="/free-audit-and-analysis"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Get Your Free Audit
            </Link>
          </div>
        </Container>
      </section>

      {/* Services cards */}
      <section className="py-14 bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/${service.id}`}
                className="group flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <div className="w-28 h-40 relative shadow-lg rounded mb-2">
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    sizes="112px"
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-xs font-semibold text-brand-dark-gray group-hover:text-brand-red transition-colors">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact form */}
      <section className="py-14 bg-brand-light-gray">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark-gray mb-2 text-center">
              Request a Free Consultation
            </h2>
            <span className="section-divider mx-auto" />
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
