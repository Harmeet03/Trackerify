import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Track your expenses | Trackerify",
    template: "%s | Trackerify"
  },

  description: "Trackerify — A modern finance tracker to manage income, expenses & savings. Built with Next.js, Tailwind CSS, and TypeScript.",

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

   openGraph: {
    title: 'Track your expenses | Trackerify',
    description: 'Trackerify — A modern finance tracker to manage income, expenses & savings. Built with Next.js, Tailwind CSS, and TypeScript',
    url: 'https://trackerify.vercel.app/',
    siteName: 'Trackerify',
    images: [
      {
        url: '/og-image.png',
        width: 1186,
        height: 791,
      }
    ],
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "Track your expenses | Trackerify",
    description: "Trackerify — A modern finance tracker to manage income, expenses & savings. Built with Next.js, Tailwind CSS, and TypeScript",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className='bg-background text-foreground font-inter'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
