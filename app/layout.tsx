import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ui/ChatBot";

const playfairFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PG India Group | Global Agri Commodity Network",
  description: "A premium global sourcing and trade network specializing in spices, raw resins, incense materials, nuts, and seeds.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairFont.variable} ${interFont.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          {/* Global Noise Overlay */}
          <div className="noise-overlay" />
          
          <Header />
          <main className="flex-grow flex flex-col relative z-10 pt-24">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
