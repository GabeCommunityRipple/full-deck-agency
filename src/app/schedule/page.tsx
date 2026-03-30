import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Schedule a Call",
  description:
    "Schedule a free consultation with Full Deck Agency. Pick a time that works for you.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-brand-dark">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Schedule Your Call</h1>
            <p className="text-gray-400">Pick a time that works for you — no obligation.</p>
          </div>
        </Container>
      </section>

      {/* Calendly embed placeholder */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-light-gray rounded-lg p-8 text-center min-h-[500px] flex flex-col items-center justify-center">
              <p className="text-brand-dark-gray font-semibold text-xl mb-3">
                Scheduling Calendar
              </p>
              <p className="text-gray-500 mb-6">
                Our scheduling calendar will appear here. In the meantime, reach out directly:
              </p>
              <a
                href="mailto:info@fulldeckagency.com"
                className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Email Us to Schedule
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
