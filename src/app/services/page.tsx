import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service digital marketing for home service contractors — SEO, Google Ads, social media, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-brand-dark-gray text-center mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Everything you need to dominate your local market and grow your home service business.
          </p>
        </Container>
      </div>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
