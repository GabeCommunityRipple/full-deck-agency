import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sky Ruler | Complete Marketing Oversight",
  description:
    "Sky Ruler by Full Deck Agency is our proprietary platform giving you complete visibility into your marketing performance across all channels.",
};

export default function SkyRulerPage() {
  return (
    <ServicePageTemplate
      title="Sky Ruler"
      tagline="Complete marketing oversight in one powerful platform."
      description="Sky Ruler is our proprietary marketing platform that gives you a single dashboard view of all your marketing activity — from SEO rankings and Google Ads performance to social media metrics and lead tracking. See everything, understand everything, act on everything."
      features={[
        { title: "Unified Dashboard", description: "All channels in one view" },
        { title: "Lead Tracking", description: "Know where leads come from" },
        { title: "Real-Time Data", description: "Up-to-the-minute metrics" },
        { title: "Performance Alerts", description: "Never miss a trend" },
      ]}
      contentSections={[
        {
          heading: "Total Transparency Into Your Marketing",
          body: "With Sky Ruler, you always know exactly what's working and what isn't. Our platform pulls data from all your marketing channels into one clean, easy-to-understand interface — so you can make smarter decisions faster.",
        },
        {
          heading: "Built for Home Service Business Owners",
          body: "Sky Ruler is designed for busy business owners, not data scientists. We surface the metrics that actually matter for your business growth and present them in a way that's immediately actionable — without the confusion of raw analytics tools.",
        },
      ]}
    />
  );
}
