"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Rénovation Salle de Bain Luxe"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    style={{ transitionDuration: "20s" }}
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Darker overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" /> {/* Top gradient for Nav */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" /> {/* Bottom fade */}
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-white/60"></div>
                        <span className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium">L'Art de la Rénovation</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white mb-8 leading-[1.1]">
                        Construire Vos <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Rêves d'Intérieur
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                        Excellence artisanale et design visionnaire à Vitry-sur-Seine.
                        Nous transformons votre espace en une œuvre d'art habitable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="text-lg px-8 py-7 rounded-none bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium tracking-wide" asChild>
                            <Link href="/devis">COMMENCER UN PROJET</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-7 rounded-none border-white bg-transparent text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300 font-medium tracking-wide" asChild>
                            <Link href="/realisations">NOS RÉALISATIONS</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
            </motion.div>
        </section>
    );
}
