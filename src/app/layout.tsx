import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/configs/metaTags";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

// sand, so mobile browser chrome blends with the page
export const viewport: Viewport = { themeColor: "#FBF6EE" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
