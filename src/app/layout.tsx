import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theo Mayer — Forward / Midfielder — Glen Ellyn Lakers FC",
  description:
    "Player profile for Theo Mayer, a 10-year-old forward and midfielder for Glen Ellyn Lakers FC Elite. Two-footed passer and dribbler, technically sharp, captain, and student-athlete.",
  keywords: [
    "Theo Mayer",
    "soccer",
    "youth soccer",
    "Glen Ellyn Lakers",
    "Chicago Fire Academy",
    "player profile",
    "travel soccer",
    "Illinois youth soccer",
  ],
  openGraph: {
    title: "Theo Mayer — Forward / Midfielder",
    description:
      "Player profile for Theo Mayer. Two-footed passer and dribbler with elite soccer IQ, team captain, and student-athlete.",
    url: "https://theomayersoccer.com",
    siteName: "Theo Mayer Soccer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
