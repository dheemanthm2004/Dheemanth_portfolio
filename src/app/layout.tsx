import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dheemanth M - Full-Stack Developer & AI Enthusiast",
  description: "Computer Science student at BMSCE building production-grade AI-powered applications. Experienced in Next.js, Node.js, real-time systems, and modern web technologies.",
  keywords: ["Dheemanth M", "Full Stack Developer", "AI Developer", "Next.js", "React", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Dheemanth M" }],
  creator: "Dheemanth M",
  openGraph: {
    title: "Dheemanth M - Full-Stack Developer & AI Enthusiast",
    description: "Computer Science student building production-grade AI-powered applications with modern web technologies.",
    url: "https://dheemanthm.vercel.app",
    siteName: "Dheemanth M Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dheemanth M - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheemanth M - Full-Stack Developer",
    description: "Building AI-powered applications with Next.js, Node.js, and modern web technologies.",
    creator: "@dheemanthm2004",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
