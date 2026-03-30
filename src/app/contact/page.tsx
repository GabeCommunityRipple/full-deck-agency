import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a free marketing audit for your home service business. Contact Full Deck Agency today.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark-gray mb-4">Get Your Free Marketing Audit</h1>
            <p className="text-lg text-gray-600">Tell us about your business and we'll show you exactly how to grow it.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-brand-red mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark-gray">Email</p>
                  <a href={`mailto:${SITE_EMAIL}`} className="text-gray-600 hover:text-brand-dark-gray">{SITE_EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-red mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark-gray">Phone</p>
                  <a href={`tel:${SITE_PHONE}`} className="text-gray-600 hover:text-brand-dark-gray">{SITE_PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark-gray">Location</p>
                  <p className="text-gray-600">Serving clients across the US</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
