import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { SITE_EMAIL, SITE_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free discovery call with Full Deck Agency or send us a message. No contracts, no pressure.",
};

const BOOKING_URL = "https://calendar.app.google/tGwjxXUXJsyejdHE9";

export default function ContactUsPage() {
  return (
    <>
      {/* Header band */}
      <section className="bg-brand-dark py-14">
        <Container>
          <h1 className="text-4xl font-bold text-white mb-3">Let's Talk</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            The fastest way to get started is to book a call. We'll figure out
            if we're a fit — no pitch deck, no pressure.
          </p>
        </Container>
      </section>

      {/* Booking CTA prominent block */}
      <section className="bg-white py-14 border-b border-gray-100">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-brand-light-gray flex items-center justify-center flex-shrink-0">
                <CalendarDays className="text-brand-red" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark-gray mb-1">
                  Book a Free Discovery Call
                </h2>
                <p className="text-gray-500">
                  30 minutes. We'll look at your current marketing, talk through
                  what's costing you leads, and lay out what we'd do differently.
                  Zero obligation.
                </p>
              </div>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Pick a Time That Works for You →
            </a>
            <p className="mt-3 text-gray-400 text-sm">No contracts. No BS. Just results.</p>
          </div>
        </Container>
      </section>

      {/* Contact form + info */}
      <section className="bg-brand-light-gray py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-gray mb-2">
                Or Send Us a Message
              </h2>
              <span className="section-divider" />
              <p className="text-gray-500 mb-8">
                Prefer to reach out on your own time? Fill out the form and
                we'll get back to you within one business day.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-red mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-brand-dark-gray text-sm">Email</p>
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="text-gray-500 hover:text-brand-red text-sm transition-colors"
                    >
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-red mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-brand-dark-gray text-sm">Address</p>
                    <p className="text-gray-500 text-sm">{SITE_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-xl p-7 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark-gray mb-5">
                Request a Free Consultation
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
