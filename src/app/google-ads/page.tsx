import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Google Ads | PPC for Home Services",
  description:
    "Full Deck Agency manages Google Ads campaigns that generate immediate, qualified leads for home service and construction businesses.",
};

export default function GoogleAdsPage() {
  return (
    <ServicePageTemplate
      title="Google Ads (PPC)"
      tagline="Direct your target demographic with precision campaigns."
      cardImage="/images/cards/lead-card.png"
      description="Google Ads is the fastest way to get in front of homeowners actively searching for your services. Our certified PPC specialists build and manage campaigns that convert clicks into calls and calls into booked jobs."
      features={[
        { title: "Search Ads", description: "Appear at the top of Google" },
        { title: "Local Services Ads", description: "Pay only for real leads" },
        { title: "Bid Management", description: "Maximize your ROI" },
        { title: "Conversion Tracking", description: "Know what's working" },
      ]}
      contentSections={[
        {
          heading: "Immediate Results, Measurable ROI",
          body: "Unlike SEO, Google Ads can generate leads starting day one. We build campaigns around the exact keywords your ideal customers use, set bids to maximize your return, and continuously optimize to lower your cost per lead.",
        },
        {
          heading: "Local Services Ads Management",
          body: "Google's Local Services Ads (LSA) put your business at the very top of search results with a Google Guaranteed badge. We set up, verify, and manage your LSA profile to ensure you're getting the highest quality leads at the lowest cost.",
        },
      ]}
    />
  );
}
