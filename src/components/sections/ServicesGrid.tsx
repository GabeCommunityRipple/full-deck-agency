import Link from "next/link";
import Container from "@/components/layout/Container";
import { ALL_SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-3">
            Our Services
          </h2>
          <span className="section-divider mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full-service digital marketing tailored specifically for home service and construction businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-brand-dark-gray mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Link
                href={`/${service.slug}`}
                className="text-brand-red hover:text-brand-red-hover text-sm font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
