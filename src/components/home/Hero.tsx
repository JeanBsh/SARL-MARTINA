"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slideshow from "@/components/ui/slideshow";

export default function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <Slideshow showText={false} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
            </div>

            {/* Content Overlay */}
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
                        TRAVAUX TCE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            RÉNOVATION ET NEUF
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                        Construire votre espace, sans stress.
                        <br />
                        SARL MARTINA réalise vos projets de rénovation et de construction neuve, avec un suivi clair et des finitions soignées. Intervention dans toute l’Île-de-France et au-delà.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* <Button size="lg" className="text-lg px-8 py-7 rounded-none bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium tracking-wide" asChild>
                            <Link href="/devis">COMMENCER UN PROJET</Link>
                        </Button> */}
                        <Button size="lg" variant="outline" className="text-lg px-8 py-7 rounded-none border-white bg-transparent text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300 font-medium tracking-wide" asChild>
                            <Link href="/realisations">DEMANDER UN DEVIS</Link>
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
