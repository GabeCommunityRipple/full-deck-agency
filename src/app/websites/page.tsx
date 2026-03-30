import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Development | Premium Websites for Home Services",
  description:
    "Full Deck Agency builds high-converting websites for home service and construction businesses. Fast, mobile-first, and designed to generate leads.",
};

export default function WebsitesPage() {
  return (
    <ServicePageTemplate
      title="Premium Website Development"
      tagline="Convert visitors into leads with a site built to perform."
      cardImage="/images/cards/website-card.png"
      description="Your website is your #1 sales tool. We build fast, modern, mobile-first websites specifically designed for home service and construction businesses — optimized to rank in search and convert visitors into paying customers."
      features={[
        { title: "Mobile-First Design", description: "Perfect on every device" },
        { title: "Lead Capture", description: "Optimized for conversions" },
        { title: "Fast Loading", description: "Core Web Vitals optimized" },
        { title: "SEO Ready", description: "Built to rank" },
      ]}
      contentSections={[
        {
          heading: "Designed for Your Industry",
          body: "Generic website templates don't cut it for home service businesses. We build custom sites that showcase your work, highlight your service areas, feature your reviews, and make it dead simple for potential customers to contact you.",
        },
        {
          heading: "Ongoing Maintenance & Support",
          body: "We don't just build and walk away. Our team provides ongoing hosting, maintenance, security updates, and content changes so your site always performs at its best — without you having to worry about it.",
        },
      ]}
    />
  );
}
