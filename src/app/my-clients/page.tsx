import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "My Clients | Client Portal",
  description:
    "Full Deck Agency client portal. Access your dashboard, reports, and resources.",
};

export default function MyClientsPage() {
  return (
    <>
      <section className="py-12 bg-brand-dark">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">My Clients</h1>
            <p className="text-gray-400">Welcome back. Access your resources below.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Log in to your Full Deck Agency dashboard to view your campaign
              performance, reports, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.fulldeckagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Client Dashboard Login
              </a>
              <Link
                href="/contact-us"
                className="bg-brand-dark hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Your Team
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
