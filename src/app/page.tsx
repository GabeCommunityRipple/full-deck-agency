import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneOff,
  ImageOff,
  TrendingDown,
  Quote,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full Deck Agency | Marketing Built for Contractors",
  description:
    "Full Deck Agency builds marketing systems for home service contractors. SEO, ads, social media, and tools — all built for the trades. Book your free discovery call.",
};

const BOOKING_URL = "https://calendar.app.google/tGwjxXUXJsyejdHE9";

/* ─── Reusable booking button ───────────────────────────────────────────────── */
function BookButton({
  label = "Book Your Free Discovery Call",
  size = "lg",
}: {
  label?: string;
  size?: "md" | "lg";
}) {
  const padding = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-lg transition-colors ${padding}`}
    >
      {label}
    </a>
  );
}

/* ─── 1. HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Faint suit watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none select-none opacity-[0.04]"
      >
        <span className="text-white font-bold leading-none"
          style={{ fontSize: "clamp(200px, 40vw, 480px)" }}>
          ♦
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-brand-red font-bold text-sm uppercase tracking-widest mb-4">
            Marketing for Home Service Contractors
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stop Losing Jobs to Contractors Who Market Better Than You
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            Most marketing agencies don't understand the trades. We built an
            entire ecosystem — lead gen, social media, community presence, and
            project tools — specifically for contractors like you.
          </p>
          <BookButton />
          <p className="mt-4 text-gray-500 text-sm">
            No contracts. No BS. Just results.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. PROBLEM ────────────────────────────────────────────────────────────── */
const PAIN_POINTS = [
  {
    icon: PhoneOff,
    title: "You've wasted money on agencies that don't return calls",
    body: "You signed a contract, paid the retainer, and got a monthly report full of charts that didn't translate to a single new job.",
  },
  {
    icon: ImageOff,
    title: 'Your "marketing guy" posts the same stock photos every week',
    body: "A generic logo reveal on a stock background isn't social media. It's wallpaper. And your potential customers scroll right past it.",
  },
  {
    icon: TrendingDown,
    title: "You're getting outranked by competitors who do half the quality work you do",
    body: "They show up first on Google. They're everywhere on Facebook. They win the job before you even know it was available.",
  },
];

function Problem() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
          Sound Familiar?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-gray mb-12 max-w-2xl">
          You're Great at Your Trade. Marketing? Not So Much.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PAIN_POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-brand-light-gray flex items-center justify-center flex-shrink-0">
                <Icon className="text-brand-red" size={24} />
              </div>
              <p className="font-bold text-brand-dark-gray text-lg leading-snug">{title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <p className="text-brand-dark-gray text-lg font-medium border-l-4 border-brand-red pl-5 max-w-2xl">
          It's not your fault — you're busy running jobs. But your competitors
          figured out marketing, and it's costing you.
        </p>
      </div>
    </section>
  );
}

/* ─── 3. ECOSYSTEM ──────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    name: "Full Deck Agency",
    badge: "Live",
    badgeColor: "bg-green-100 text-green-800",
    description:
      "Your marketing command center. SEO, Google Ads, Facebook Ads, and a dedicated team that actually picks up the phone.",
    prominent: true,
  },
  {
    name: "Full Deck Social",
    badge: "Live",
    badgeColor: "bg-green-100 text-green-800",
    description:
      "Your clients upload photos from the job site. Our AI turns them into scroll-stopping social posts — automatically.",
    prominent: false,
  },
  {
    name: "Community Ripple",
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-500",
    description:
      "Get your business in front of local homeowners through community-driven marketing that builds trust before they ever need you.",
    prominent: false,
  },
  {
    name: "Ready Set Plans",
    badge: "Beta",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "Estimate, plan, and manage your projects in one place. Less paperwork, more jobs.",
    prominent: false,
  },
];

function Ecosystem() {
  return (
    <section className="bg-brand-light-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
          The Full Deck Ecosystem
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-gray mb-3">
          Not Just an Agency. A System Built for Contractors.
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl">
          While other agencies hand you a cookie-cutter plan, we built four
          products that work together to fill your pipeline and keep it full.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-xl p-7 shadow-sm border transition-shadow hover:shadow-md ${
                p.prominent ? "border-brand-red" : "border-gray-100"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-xl font-bold ${p.prominent ? "text-brand-red" : "text-brand-dark-gray"}`}>
                  {p.name}
                </h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-3 ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <p className="text-brand-dark-gray text-base leading-relaxed border-l-4 border-brand-red pl-5 max-w-3xl">
          Every piece connects. Leads come in through Agency. Social keeps you
          visible. Ripple builds your reputation. Plans keeps you organized.{" "}
          <strong>That's what working with a full deck looks like.</strong>
        </p>
      </div>
    </section>
  );
}

/* ─── 4. WHY FULL DECK ──────────────────────────────────────────────────────── */
const DIFFERENTIATORS = [
  {
    heading: "We Only Work With Contractors",
    body: "We don't do dentists, lawyers, and restaurants on the side. Every strategy, every campaign, every dollar we spend is tuned for home services. We know your customers because they're the only customers we serve.",
  },
  {
    heading: "We Build, Not Rent",
    body: "Other agencies give you a dashboard and a monthly report. We build you an interconnected system — your own social engine, your own community presence, your own project pipeline. You own it.",
  },
  {
    heading: "We Talk Straight",
    body: "No 90-day 'ramp up periods.' No vanity metrics. No contracts that lock you in. We earn your business every month because we're confident in what we deliver.",
  },
];

function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
          Why Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-gray mb-12">
          We're Not Another Agency That Doesn't Get It
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map(({ heading, body }) => (
            <div key={heading}>
              <div className="w-10 h-1 bg-brand-red mb-4" />
              <h3 className="text-xl font-bold text-brand-dark-gray mb-3">{heading}</h3>
              <p className="text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. SOCIAL PROOF ───────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:
      "We went from scrambling for leads to being booked out 6 weeks. Doubled our revenue in one season. I wish I'd found these guys years ago.",
    name: "Marcus T.",
    company: "T&T Deck Builders",
    industry: "Deck Builder",
  },
  {
    quote:
      "Google Ads alone brought in $45K of new business in the first 90 days. The team is sharp, they actually pick up the phone, and they know roofing.",
    name: "Dave R.",
    company: "Ridge Line Roofing",
    industry: "Roofing",
  },
  {
    quote:
      "I was on page 3. My competitor — who does sloppy work — was #1. Three months in, I'm ranking above him for every keyword in our area.",
    name: "Kyle B.",
    company: "Bright Force Exteriors",
    industry: "Power Washing",
  },
];

function SocialProof() {
  return (
    <section className="bg-brand-light-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-gray mb-12 text-center">
          What Contractors Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-7 shadow-sm flex flex-col gap-4"
            >
              <Quote className="text-brand-red opacity-30" size={32} />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-brand-dark-gray leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="font-bold text-brand-dark-gray">{t.name}</p>
                <p className="text-gray-500 text-sm">
                  {t.company} · {t.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. FINAL CTA ──────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          While Your Competitors Are Guessing, You Could Be Booked Out.
        </h2>
        <p className="text-gray-300 text-xl mb-10 leading-relaxed">
          One call. That's all it takes to see if we're a fit. No pitch deck,
          no pressure — just a straight conversation about growing your
          business.
        </p>
        <BookButton label="Book Your Discovery Call" />
        <p className="mt-8 text-gray-600 text-sm italic">
          Is your marketing working with a full deck?
        </p>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Ecosystem />
      <WhyUs />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
