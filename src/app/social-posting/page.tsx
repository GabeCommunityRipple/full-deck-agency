import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Posting | Targeted Social Media Marketing",
  description:
    "Full Deck Agency manages consistent social media posting for home service businesses on Facebook, Instagram, and more.",
};

export default function SocialPostingPage() {
  return (
    <ServicePageTemplate
      title="Social Media Posting"
      tagline="Where there's a phone, there's an opportunity."
      cardImage="/images/cards/social-media-card.png"
      description="Consistent, professional social media presence builds trust with your audience and keeps your brand top-of-mind. We create and schedule engaging content for your Facebook and Instagram profiles — so you can focus on running your business."
      features={[
        { title: "Content Creation", description: "Professional posts" },
        { title: "Consistent Scheduling", description: "Never go dark" },
        { title: "Platform Management", description: "FB, IG, and more" },
        { title: "Engagement Monitoring", description: "Stay connected" },
      ]}
      contentSections={[
        {
          heading: "Content That Reflects Your Brand",
          body: "We create branded content that showcases your work, your team, and your expertise. Before-and-after project photos, customer testimonials, seasonal promotions — every post is designed to build credibility and drive inquiries.",
        },
        {
          heading: "Grow Your Following, Grow Your Business",
          body: "An active social presence signals to potential customers that you're a legitimate, thriving business. We help you grow your follower base organically through strategic posting, hashtag research, and community engagement.",
        },
      ]}
    />
  );
}
