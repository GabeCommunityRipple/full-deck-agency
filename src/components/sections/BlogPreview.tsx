import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Marketing Tips & Insights"
          subtitle="Stay ahead of the competition with practical advice for home service businesses."
        />
        <div className="text-center">
          <p className="text-gray-500 mb-6">Articles coming soon — check back for expert marketing insights.</p>
          <Button href="/blog" variant="secondary">Visit Our Blog</Button>
        </div>
      </Container>
    </section>
  );
}
