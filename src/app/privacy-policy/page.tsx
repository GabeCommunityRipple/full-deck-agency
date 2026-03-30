import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-brand-dark-gray mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p>{SITE_NAME} ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">Information We Collect</h2>
          <p>We collect information you provide directly to us when you fill out our contact form, including your name, email address, phone number, and message.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">How We Use Your Information</h2>
          <p>We use your information to respond to your inquiries, provide our services, and improve our website.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">Contact Us</h2>
          <p>Questions about this policy? Email us at <a href={`mailto:${SITE_EMAIL}`} className="text-brand-red hover:underline">{SITE_EMAIL}</a>.</p>
        </div>
      </Container>
    </div>
  );
}
