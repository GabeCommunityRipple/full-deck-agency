import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real home service contractors — see how Full Deck Agency has helped businesses grow.",
};

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Client Success Stories"
          subtitle="Real numbers, real businesses, real growth."
        />
        <p className="text-center text-gray-500">Case studies coming soon.</p>
      </Container>
    </div>
  );
}
