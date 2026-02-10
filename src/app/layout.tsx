import type { Metadata } from "next";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";



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
  metadataBase: new URL("https://www.sarl-martina.fr"), // Replace with actual domain
  title: {
    default: "SARL MARTINA - Rénovation Exceptionnelle & Design Intérieur",
    template: "%s | SARL MARTINA"
  },
  description: "Expert en rénovation tous corps d'état à Vitry-sur-Seine et en Île-de-France. Maçonnerie, peinture, électricité, plomberie et design d'intérieur haut de gamme.",
  keywords: ["Rénovation", "Bâtiment", "Architecture d'intérieur", "Travaux", "Vitry-sur-Seine", "Île-de-France", "Design", "Luxe"],
  authors: [{ name: "SARL MARTINA" }],
  creator: "SARL MARTINA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.sarl-martina.fr",
    title: "SARL MARTINA - Rénovation d'Excellence",
    description: "Transformez votre espace avec SARL MARTINA. Expertise technique et design raffiné pour tous vos projets de rénovation.",
    siteName: "SARL MARTINA",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SARL MARTINA - Rénovation & Design Intérieur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARL MARTINA - Rénovation & Design",
    description: "Expertise et élégance pour vos travaux de rénovation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <CookieConsent />
        </SmoothScroll>
      </body>

    </html>
  );
}
