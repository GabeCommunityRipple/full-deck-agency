import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Marketing",
  description:
    "Full Deck Agency creates compelling content that positions your home service business as the local authority and drives organic traffic.",
};

export default function ContentPage() {
  return (
    <ServicePageTemplate
      title="Content Marketing"
      tagline="Position your brand as the local authority."
      description="Great content attracts the right customers, builds trust, and improves your search rankings. We create blog posts, service pages, landing pages, and more — all optimized for your target keywords and your target audience."
      features={[
        { title: "Blog Posts", description: "Drive organic traffic" },
        { title: "Service Pages", description: "Convert visitors" },
        { title: "SEO Copywriting", description: "Rank and convert" },
        { title: "Content Strategy", description: "Long-term growth" },
      ]}
      contentSections={[
        {
          heading: "Content That Ranks and Converts",
          body: "Our content team writes with two audiences in mind: Google's algorithm and your potential customers. Every piece is researched, optimized for target keywords, and written to move readers toward calling or filling out a form.",
        },
        {
          heading: "A Complete Content Strategy",
          body: "We don't just write random blog posts. We build a content strategy around your service area, your competitors, and the specific questions your ideal customers are searching for — then execute it consistently month after month.",
        },
      ]}
    />
  );
}
