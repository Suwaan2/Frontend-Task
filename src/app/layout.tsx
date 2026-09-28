import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Digital Chautari | Creative Technology Kathmandu",
  description:
    "A creative technology company in Kathmandu, Nepal, offering digital marketing, content creation, and health-tech software.",
  keywords: [
    "Digital Chautari",
    "Digital Marketing Kathmandu",
    "Content Creation Nepal",
    "Health-Tech Software",
    "Physio@Home",
    "Nepal Tech Agency",
  ],
  authors: [{ name: "Digital Chautari" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="antialiased">
        <ScrollToTop />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
