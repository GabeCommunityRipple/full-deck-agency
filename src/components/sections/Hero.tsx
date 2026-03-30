import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block bg-brand-red text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Home Services Marketing Agency
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              More Leads. More Jobs.{" "}
              <span className="text-brand-red">More Revenue.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-blue-100 mb-8">
              We help roofing, HVAC, plumbing, and landscaping companies
              dominate their local market with proven digital marketing
              strategies.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Your Free Marketing Audit
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark-gray">
                See Our Results
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
