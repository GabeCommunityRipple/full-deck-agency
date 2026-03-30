import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";

interface Feature {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  tagline: string;
  description: string;
  cardImage?: string;
  features: Feature[];
  contentSections?: { heading: string; body: string }[];
}

export default function ServicePageTemplate({
  title,
  tagline,
  description,
  cardImage,
  features,
  contentSections = [],
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-brand-dark flex items-center min-h-[280px]">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <Container className="relative z-10">
          <div className="max-w-xl bg-white/95 rounded-lg shadow-xl p-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark-gray mb-2">
              {title}
            </h1>
            <p className="text-gray-500 mb-4">{tagline}</p>
            <Link
              href="/schedule"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule Your Call
            </Link>
          </div>
        </Container>
      </section>

      {/* Main description */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-2">
              {title}
            </h2>
            <span className="section-divider" />
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </Container>
      </section>

      {/* Feature icons row */}
      <section className="py-10 bg-brand-light-gray">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-red mx-auto flex items-center justify-center mb-3">
                  <span className="text-white text-2xl font-bold">✦</span>
                </div>
                <p className="font-semibold text-brand-dark-gray text-sm">{f.title}</p>
                {f.description && (
                  <p className="text-gray-500 text-xs mt-1">{f.description}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Alternating content sections */}
      {contentSections.map((section, i) => (
        <section key={i} className={`py-14 ${i % 2 === 0 ? "bg-white" : "bg-brand-light-gray"}`}>
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-brand-dark-gray mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{section.body}</p>
              <Link
                href="/schedule"
                className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Schedule Your Call
              </Link>
            </div>
          </Container>
        </section>
      ))}

      {/* Contact form section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-2">
                Get in Touch with Full Deck Agency
              </h2>
              <span className="section-divider" />
              <p className="text-gray-600 leading-relaxed">
                There's never any obligation. Let's talk about how {title} can
                help grow your business.
              </p>
              {cardImage && (
                <div className="mt-8 flex justify-center lg:justify-start">
                  <div className="w-32 h-44 relative shadow-lg rounded">
                    <Image
                      src={cardImage}
                      alt={title}
                      fill
                      sizes="128px"
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="bg-brand-light-gray rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-brand-dark-gray mb-4">
                Request a Free Consultation
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
