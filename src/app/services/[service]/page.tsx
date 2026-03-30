import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { Check } from "lucide-react";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{service.description}</p>
            <Button href="/contact" size="lg">Get Started</Button>
          </div>
        </Container>
      </div>

      <div className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark-gray mb-8">What's Included</h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="text-brand-red mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
