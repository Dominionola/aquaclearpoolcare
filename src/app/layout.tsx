import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AquaClear Pool Service | Professional Pool Cleaning in Austin, TX",
  description:
    "Austin TX's most trusted pool cleaning service. Weekly maintenance, repairs, and equipment installation. Licensed & insured. Free estimates available.",
  keywords: [
    "pool cleaning Austin",
    "pool service Austin TX",
    "pool maintenance",
    "pool repair",
    "pool equipment installation",
  ],
  openGraph: {
    title: "AquaClear Pool Service | Austin, TX",
    description: "Professional pool cleaning and maintenance in Austin, TX",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaClear Pool Service",
    description: "Professional pool cleaning and maintenance in Austin, TX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-navy-deep bg-offwhite min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <FinalCTA />
        <Footer />
      </body>
    </html>
  );
}
