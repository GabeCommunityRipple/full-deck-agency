import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real results from real home service contractors."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-brand-dark-gray">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                  <p className="text-sm text-gray-400">{t.location}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
