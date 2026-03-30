import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    step: "01",
    title: "Free Marketing Audit",
    description: "We analyze your current online presence, competitors, and local market opportunities.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    description: "We build a tailored marketing plan targeting your ideal customers in your service area.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "We execute campaigns and continuously optimize based on real performance data.",
  },
  {
    step: "04",
    title: "Track & Report",
    description: "You get transparent monthly reports showing exactly where your money is going and what it's returning.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="Getting started is easy. We handle the heavy lifting so you can focus on doing great work."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.step} className="text-center">
              <div className="text-5xl font-bold text-brand-red/20 mb-4">{step.step}</div>
              <h3 className="text-lg font-bold text-brand-dark-gray mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
