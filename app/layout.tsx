import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Cybersecurity & AI Specialist",
  description: "Professional portfolio showcasing experience in cybersecurity and artificial intelligence. Explore my projects, certifications, and expertise.",
  keywords: ["cybersecurity", "artificial intelligence", "AI", "portfolio", "software engineer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Cybersecurity & AI Specialist",
    description: "Professional portfolio showcasing experience in cybersecurity and artificial intelligence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Cybersecurity & AI Specialist",
    description: "Professional portfolio showcasing experience in cybersecurity and artificial intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
