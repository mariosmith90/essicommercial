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
    "EssiCommercial is a full-service interior design studio led by Daniela Smith — a licensed designer with 10+ years delivering commercial, residential, and wellness spaces across the Northeast.",
  keywords:
    "interior design, architecture, commercial interiors, Revit, ArchiCAD, AutoCAD, FF&E, wellness design, New York, Northeast, Daniela Smith",
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
