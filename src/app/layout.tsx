import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dheemanth M - Full-Stack Developer & AI Enthusiast | Portfolio",
  description: "CSE student at BMSCE with 9.08 CGPA building production-grade AI-powered applications. 3 live projects serving 350+ users. Expertise in Next.js, Node.js, AI integration, and scalable systems.",
  keywords: [
    "Dheemanth M", "Dheemanth Madaiah", "Full Stack Developer", "AI Developer", 
    "Next.js Developer", "React Developer", "Node.js", "TypeScript", "Portfolio",
    "BMSCE", "Computer Science", "Bangalore Developer", "AI Integration",
    "Real-time Applications", "DheeSpace", "ResuScanX", "DheeNotifications"
  ],
  authors: [{ name: "Dheemanth M", url: "https://github.com/dheemanthm2004" }],
  creator: "Dheemanth M",
  publisher: "Dheemanth M",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dheemanth M - Full-Stack Developer & AI Enthusiast",
    description: "CSE student building production-grade AI applications. 3 live projects, 350+ users, 9.08 CGPA. Expertise in Next.js, AI integration & scalable systems.",
    url: "https://dheemanthm.vercel.app",
    siteName: "Dheemanth M - Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Dheemanth M - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheemanth M - Full-Stack Developer & AI Enthusiast",
    description: "Building production-grade AI applications with Next.js, Node.js. 3 live projects serving 350+ users.",
    creator: "@dheemanthm2004",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
  <link rel="icon" type="image/png" href="https://lnk.ink/Rm7MD" />
  <link rel="apple-touch-icon" href="https://lnk.ink/Rm7MD" />
  <meta name="theme-color" content="#7c3aed" />
  <meta name="msapplication-TileColor" content="#7c3aed" />
  <link rel="canonical" href="https://dheemanthmadaiah.vercel.app" />
</head>

      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
