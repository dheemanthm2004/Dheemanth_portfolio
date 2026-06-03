import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dheemanth M - Software Engineer @ IBM ISL | Full-Stack Developer",
  description: "Software Engineering Intern at IBM ISL (SevOne) working on distributed Go/gRPC services. CS graduate from BMSCE with 9.14 CGPA. Expertise in React, TypeScript, Go, PostgreSQL, and scalable production systems.",
  keywords: [
    "Dheemanth M", "Dheemanth Madaiah", "Software Engineer", "IBM ISL", "SevOne",
    "Full Stack Developer", "Go Developer", "gRPC", "React Developer", "TypeScript",
    "Next.js Developer", "Node.js", "PostgreSQL", "Distributed Systems", "Portfolio",
    "BMSCE", "Computer Science", "Bangalore Developer", "Protocol Buffers",
    "Playwright", "Production Engineer", "Backend Developer"
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
    title: "Dheemanth M - Software Engineer @ IBM ISL | Full-Stack Developer",
    description: "Software Engineering Intern at IBM ISL (SevOne). Building distributed Go/gRPC services, React frontends, and production SaaS features. BMSCE CS grad with 9.14 CGPA.",
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
    title: "Dheemanth M - Software Engineer @ IBM ISL | Full-Stack Developer",
    description: "Building production features at IBM ISL (SevOne) with React, TypeScript, Go, gRPC. BMSCE CS graduate with 9.14 CGPA.",
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
