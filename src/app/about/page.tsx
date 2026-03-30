import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Full Deck Agency — your digital and print marketing solution for home services, construction, and decking companies.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-brand-dark flex items-center min-h-[260px]">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <Container className="relative z-10">
          <div className="max-w-xl bg-white/95 rounded-lg shadow-xl p-8">
            <h1 className="text-4xl font-bold text-brand-dark-gray">About</h1>
            <p className="text-gray-500 mt-2">Full Deck Agency</p>
          </div>
        </Container>
      </section>

      {/* About section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-2">
              About <span className="text-brand-red">Full Deck Agency</span>
            </h2>
            <span className="section-divider" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Full Deck Agency was born out of a simple observation: home service
              businesses — roofers, deck builders, HVAC contractors, plumbers —
              were being underserved by generic marketing agencies that didn't
              understand their industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our founder, Gabe Andersen, spent years working closely with home
              service contractors and saw firsthand how the right digital strategy
              could transform a small local business into a dominant regional
              brand. He built Full Deck Agency specifically to serve these
              businesses — with the same level of strategy, creativity, and
              data-driven execution that Fortune 500 companies receive.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, Full Deck Agency serves clients across multiple states,
              helping them generate more leads, win more jobs, and build lasting
              brands in their local markets.
            </p>
            <p className="text-brand-dark-gray font-semibold text-lg">
              Now, is your company working with a full deck?
            </p>
          </div>
        </Container>
      </section>

      {/* Personalized Marketing */}
      <section className="py-16 bg-brand-light-gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo/full-deck-logo-square.png"
                alt="Full Deck Agency personalized marketing"
                width={400}
                height={300}
                className="rounded-lg shadow object-contain max-h-72"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-2 leading-tight">
                <span className="text-brand-red">
                  Personalized Marketing Plans
                </span>{" "}
                for premium Home Service, Ecommerce, Professionals &amp; More.
              </h2>
              <span className="section-divider" />
              <p className="text-gray-600 leading-relaxed">
                No two businesses are the same — and neither are our marketing
                plans. We take time to understand your specific goals, your
                service area, your competition, and your budget before building
                a strategy tailored exactly to what you need. Every client gets
                a dedicated team and a plan built from the ground up.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-dark py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Jump-Start Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-gray mb-2">
              Jump-Start Your Marketing Efforts
            </h2>
            <p className="text-lg text-brand-red font-semibold mb-8">
              It's Time to Revolutionize Your Business Strategy
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                "Get found by customers actively searching for your services in your area.",
                "Convert more website visitors into calls, leads, and booked jobs.",
                "Build a recognizable brand that dominates your local market.",
                "Use real data to make smarter marketing decisions every month.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact-us"
                className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
