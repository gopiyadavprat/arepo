import type { Metadata } from "next";
import { Syne, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { NoiseOverlay } from "./components/ui/NoiseOverlay";
import { Preloader } from "./components/ui/Preloader";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { MeshGradient } from "./components/ui/MeshGradient";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STT | We Build What Others Can't",
  description:
    "Engineering digital excellence — from idea to production, flawlessly. Premium web development, creative technology, and digital product design.",
  openGraph: {
    title: "STT | We Build What Others Can't",
    description:
      "Engineering digital excellence — from idea to production, flawlessly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-void text-silver overflow-x-hidden`}
      >
        <SmoothScroll>
          <Preloader />
          <NoiseOverlay />
          <ScrollProgress />
          <MeshGradient />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
