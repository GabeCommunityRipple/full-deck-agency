import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Lounsbury | Client Showcase",
  description:
    "See how Full Deck Agency helped Lounsbury grow their home services business with digital marketing.",
};

export default function LounsburyBotPage() {
  return (
    <>
      <section className="py-12 bg-brand-dark">
        <Container>
          <div className="text-white text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Lounsbury</h1>
            <p className="text-gray-400">Client Showcase — Home Services</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark-gray mb-2">
              How Full Deck Agency Helped <span className="text-brand-red">Lounsbury</span> Grow
            </h2>
            <span className="section-divider" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Lounsbury partnered with Full Deck Agency to strengthen their
              online presence and generate more qualified leads through targeted
              digital marketing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Through a combination of local SEO, social media management, and
              strategic advertising, we helped them reach more of the right
              customers in their service area.
            </p>
            <Link
              href="/contact-us"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Similar Results
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
