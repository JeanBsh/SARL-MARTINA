import type { Metadata } from "next";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



// Using Inter Tight for a modern feel, falling back to Inter if needed
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "SARL MARTINA - Rénovation Exceptionnelle",
  description: "Entreprise de rénovation tous corps d'état à Vitry-sur-Seine. Excellence et design premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(
        "min-h-screen bg-background font-sans antialiased",
        interTight.variable,
        playfair.variable
      )}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>

    </html>
  );
}
