import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Local Listings Management",
  description:
    "Full Deck Agency manages your local business listings across Google, Yelp, and dozens of other directories to boost your local visibility.",
};

export default function ListingsPage() {
  return (
    <ServicePageTemplate
      title="Local Listings Management"
      tagline="Get your business info in front of local customers."
      description="Accurate, consistent business listings across the web are essential for local SEO and customer trust. We ensure your business name, address, phone number, and hours are correct everywhere — from Google to Yelp to Apple Maps and beyond."
      features={[
        { title: "Directory Submissions", description: "50+ directories" },
        { title: "NAP Consistency", description: "Accurate everywhere" },
        { title: "Review Management", description: "Build your reputation" },
        { title: "Citation Building", description: "Boost local SEO" },
      ]}
      contentSections={[
        {
          heading: "Why Listings Matter for Local SEO",
          body: "Google uses your business listing data across the web as a ranking signal. Inconsistent or incorrect listings can hurt your local search rankings. We audit, correct, and build citations to give you the strongest possible local SEO foundation.",
        },
        {
          heading: "Ongoing Listing Maintenance",
          body: "Listings change — new competitors, duplicate entries, and outdated information can appear at any time. We monitor your listings continuously and keep everything accurate and up-to-date so you never miss a customer.",
        },
      ]}
    />
  );
}
