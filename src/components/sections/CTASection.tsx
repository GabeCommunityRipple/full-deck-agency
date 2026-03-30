import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTASection() {
  return (
    <section className="bg-brand-red py-20">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Get a free marketing audit and see exactly what it will take to dominate your local market.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get My Free Audit
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
