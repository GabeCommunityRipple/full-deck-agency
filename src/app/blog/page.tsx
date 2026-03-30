import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Marketing tips and insights for home service businesses from Full Deck Agency.",
};

export default function BlogPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Marketing Tips & Insights"
          subtitle="Expert advice to help home service contractors grow their business online."
        />
        <p className="text-center text-gray-500">Articles coming soon — check back shortly.</p>
      </Container>
    </div>
  );
}
