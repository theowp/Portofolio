import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DataGrid } from "@/components/DataGrid";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Théo ALASSEUR-DEJOIE | Data, IA & Transformation Digitale",
    template: "%s | Théo ALASSEUR-DEJOIE"
  },
  description: "Portfolio de Théo ALASSEUR-DEJOIE - Étudiant en MSc AI Applied to Business à Eugenia School. Passionné par la Data, l'IA et la Transformation Digitale.",
  keywords: ["Data", "AI", "Transformation Digitale", "Business Analytics", "Power BI", "Python", "No-Code", "Alternance", "Paris"],
  authors: [{ name: "Théo ALASSEUR-DEJOIE" }],
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Théo A-D",
  },
  openGraph: {
    title: "Théo ALASSEUR-DEJOIE | Data, IA & Transformation Digitale",
    description: "Étudiant en MSc AI Applied to Business - En recherche d'alternance à partir de Septembre 2026",
    type: "website",
    locale: "fr_FR",
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
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-white`}
      >
        {/* Animated background */}
        <DataGrid />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* PWA Service Worker */}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
