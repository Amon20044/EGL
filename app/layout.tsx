import type { Metadata } from "next";
import "./globals.css";
import VantaFog from "./components/VantaFog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://evolvegamerleague.com";

export const metadata: Metadata = {
  title: {
    default: "EVOLVE Gamer League | India's Premier Free-to-Compete Esports Platform",
    template: "%s | EVOLVE Gamer League",
  },
  description:
    "Join India's first free-to-compete, pro-led national esports league. Compete in BGMI tournaments, climb through tiers (C → B → A → S), and evolve from underdog to pro. No paywalls, just pure skill.",
  keywords: [
    "esports",
    "BGMI tournaments",
    "Indian esports",
    "gaming league",
    "competitive gaming",
    "free esports",
    "pro gaming",
    "EVOLVE",
    "EGL",
    "esports India",
    "gaming community",
    "BGMI league",
    "mobile esports",
    "esports tournaments",
  ],
  authors: [{ name: "EVOLVE Gamer League" }],
  creator: "EVOLVE Gamer League",
  publisher: "EVOLVE Gamer League",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "EVOLVE Gamer League",
    title: "EVOLVE Gamer League | Your Gateway to Professional Esports",
    description:
      "India's first free-to-compete, pro-led national esports league. A structured, story-driven ecosystem where underdogs evolve into pros.",
    images: [
      {
        url: "/og-image.png",
        width: 1039,
        height: 351,
        alt: "EVOLVE Gamer League - India's Premier Esports Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOLVE Gamer League | India's Premier Esports Platform",
    description:
      "Join India's first free-to-compete esports league. Compete, climb tiers, and evolve from underdog to pro.",
    images: ["/og-image.png"],
    creator: "@evolveGL",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  category: "gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VantaFog />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

