import Container from "@/components/layout/Container";

const logos = [
  "Built Exclusively for Contractors",
  "4 Products — One Ecosystem",
  "No Contracts, Cancel Anytime",
  "Based in North Carolina",
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <span key={logo} className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
