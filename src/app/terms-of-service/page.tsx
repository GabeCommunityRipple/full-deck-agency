import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-brand-dark-gray mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p>By accessing {SITE_NAME}'s website and services, you agree to these Terms of Service.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">Use of Services</h2>
          <p>You agree to use our services for lawful purposes only and in accordance with these terms.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">Intellectual Property</h2>
          <p>All content on this website is the property of {SITE_NAME} and may not be reproduced without permission.</p>
          <h2 className="text-2xl font-bold text-brand-dark-gray">Contact</h2>
          <p>Questions? Email <a href={`mailto:${SITE_EMAIL}`} className="text-brand-red hover:underline">{SITE_EMAIL}</a>.</p>
        </div>
      </Container>
    </div>
  );
}
