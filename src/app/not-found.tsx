import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/cards/all-cards.png"
              alt="Cards scattered"
              width={200}
              height={140}
              className="opacity-80"
            />
          </div>
          <h1 className="text-5xl font-bold text-brand-red mb-4">404</h1>
          <h2 className="text-2xl font-bold text-brand-dark-gray mb-4">
            Uh oh! Looks like you fell off the deck!
          </h2>
          <p className="text-gray-600 mb-8">
            Click the button below to get back on.
          </p>
          <Link
            href="/"
            className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
