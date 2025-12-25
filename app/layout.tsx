import type { Metadata } from "next";
import "./globals.css";
import VantaFog from "./components/VantaFog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Evolve Gamers League",
  description: "Join the ultimate gaming community",
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

