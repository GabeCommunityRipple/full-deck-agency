import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services | Specialized SEO",
  description:
    "Full Deck Agency's specialized SEO services help home service and construction businesses dominate local search results and get on Google's 1st page.",
};

export default function SeoPage() {
  return (
    <ServicePageTemplate
      title="Specialized SEO"
      tagline="Is your company working with a full deck?"
      cardImage="/images/cards/seo-card.png"
      description="Our specialized SEO services are built exclusively for home service and construction businesses. We understand your local market, your competition, and exactly what Google needs to see to rank your business at the top of local search results."
      features={[
        { title: "Get on Google's 1st Page", description: "Dominate local search" },
        { title: "Top Rankings", description: "Outrank your competition" },
        { title: "Keyword Rank Reporting", description: "Track your progress" },
        { title: "Imperative KPIs", description: "Measurable results" },
      ]}
      contentSections={[
        {
          heading: "Local SEO That Drives Real Leads",
          body: "We optimize your Google Business Profile, build local citations, and implement on-page SEO strategies that put your business in front of homeowners searching for your services right now. Every campaign is tailored to your specific service area.",
        },
        {
          heading: "Transparent Reporting Every Month",
          body: "You'll always know exactly how your SEO is performing. We provide monthly keyword ranking reports, traffic analytics, and lead attribution data so you can see the direct impact on your business.",
        },
        {
          heading: "Technical SEO & Site Optimization",
          body: "A fast, technically sound website is the foundation of great SEO. We audit and optimize your site's speed, mobile performance, Core Web Vitals, and technical structure to give you the best possible rankings.",
        },
      ]}
    />
  );
}
