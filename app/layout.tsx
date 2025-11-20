import type { Metadata } from "next";
import { Syne, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { NoiseOverlay } from "./components/ui/NoiseOverlay";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Preloader } from "./components/ui/Preloader";

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
  title: "AGENCY | Digital Alchemy",
  description: "We blend raw technical precision with fluid, organic motion.",
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
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
