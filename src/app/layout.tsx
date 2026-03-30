import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Full Deck Agency | Home Services Marketing",
    template: "%s | Full Deck Agency",
  },
  description:
    "Is your company working with a full deck? Full Deck Agency helps home service, construction, and decking businesses grow with SEO, Google Ads, social media, and more.",
  metadataBase: new URL("https://fulldeckagency.com"),
  icons: {
    icon: "/images/logo/full-deck-square.png",
    apple: "/images/logo/full-deck-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
