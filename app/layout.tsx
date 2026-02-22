import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EssiCommercial — Interior Design & Architecture",
  description:
    "EssiCommercial is a New York-based interior design and build firm crafting wellness-centered, culturally grounded spaces for residential and commercial clients across the Northeast.",
  keywords:
    "interior design, architecture, commercial interiors, wellness design, sustainable design, New York, Northeast, biophilic design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body
        className="antialiased"
        style={{ backgroundColor: '#dcc3a0', color: '#1a0e06' }}
      >
        <a href="#main" className="skip-nav">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
