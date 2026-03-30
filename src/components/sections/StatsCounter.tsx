import Container from "@/components/layout/Container";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { STATS } from "@/lib/constants";

export default function StatsCounter() {
  return (
    <section className="bg-brand-dark py-16">
      <Container>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
