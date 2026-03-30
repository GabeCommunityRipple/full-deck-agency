import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Facebook Ads | Social Media Advertising",
  description:
    "Full Deck Agency runs Facebook and Instagram ad campaigns that generate qualified leads for home service businesses.",
};

export default function FacebookAdsPage() {
  return (
    <ServicePageTemplate
      title="Facebook Ads"
      tagline="Begin generating leads with targeted social advertising."
      description="Facebook and Instagram advertising lets you reach homeowners in your service area before they even know they need you. We build compelling ad creative, precise audience targeting, and optimized funnels that turn social scrollers into paying customers."
      features={[
        { title: "Lead Generation Ads", description: "Fill your pipeline" },
        { title: "Audience Targeting", description: "Reach the right people" },
        { title: "Ad Creative", description: "Stop the scroll" },
        { title: "Performance Reporting", description: "Full transparency" },
      ]}
      contentSections={[
        {
          heading: "Targeted Campaigns for Home Services",
          body: "We build Facebook and Instagram campaigns specifically for home service contractors. From roofing and HVAC to deck building and landscaping, we know the audiences, the messaging, and the offers that convert for your industry.",
        },
        {
          heading: "Retargeting to Maximize Every Dollar",
          body: "Most visitors don't convert on their first visit. Our retargeting campaigns keep your business top-of-mind for people who've already shown interest, dramatically increasing your conversion rates and lowering your cost per lead.",
        },
      ]}
    />
  );
}
