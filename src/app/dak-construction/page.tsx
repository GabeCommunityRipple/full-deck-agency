import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "DAK Construction | Client Showcase",
  description:
    "See how Full Deck Agency helped DAK Construction grow their business with digital marketing.",
};

export default function DakConstructionPage() {
  return (
    <>
      <section className="py-12 bg-brand-dark">
        <Container>
          <div className="text-white text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">DAK Construction</h1>
            <p className="text-gray-400">Client Showcase — Deck &amp; Home Builders</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark-gray mb-2">
              How Full Deck Agency Helped <span className="text-brand-red">DAK Construction</span> Grow
            </h2>
            <span className="section-divider" />
            <p className="text-gray-600 leading-relaxed mb-4">
              DAK Construction partnered with Full Deck Agency to improve their
              local SEO, launch targeted Google Ads campaigns, and build a
              professional online presence that matched the quality of their work.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The results speak for themselves — increased website traffic, more
              qualified leads, and consistent growth in booked projects.
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
