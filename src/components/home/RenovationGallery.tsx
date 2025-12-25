"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const images = [
    "/images/img (5).jpeg",
    "/images/img (1).jpeg",
    "/images/img (2).jpeg",
    "/images/img (3).jpeg",
    "/images/img (9).jpeg",
    "/images/img (12).jpeg",
    "/images/img (13).jpeg",
];

export default function RenovationGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Approx card width
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Rénovation totale</h2>
                        <div className="h-1 w-20 bg-primary mb-8 mx-auto" />
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Nous avons réalisé une rénovation complète de ce logement, de la conception à la finition.
                            Les travaux ont inclus la reprise des sols et murs, l’aménagement d’une cuisine sur mesure,
                            l’électricité, la plomberie, ainsi que des finitions haut de gamme.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Container */}
            <div className="relative max-w-7xl mx-auto px-4">
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-8 z-10 hidden md:flex">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={cn(
                            "p-3 rounded-full bg-white/80 backdrop-blur shadow-lg border border-white/20 transition-all hover:bg-white text-primary",
                            !canScrollLeft ? "opacity-0 pointer-events-none" : "hover:scale-110 active:scale-95"
                        )}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-8 z-10 hidden md:flex">
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={cn(
                            "p-3 rounded-full bg-white/80 backdrop-blur shadow-lg border border-white/20 transition-all hover:bg-white text-primary",
                            !canScrollRight ? "opacity-0 pointer-events-none" : "hover:scale-110 active:scale-95"
                        )}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Scroll Area */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-8 overflow-x-auto px-4 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-4 md:px-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-none w-[85vw] md:w-[500px] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl snap-center group border border-black/5"
                        >
                            <Image
                                src={src}
                                alt={`Rénovation - Photo ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 85vw, 500px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                    {/* Spacer for proper end padding */}
                    <div className="w-4 flex-none" />
                </div>
            </div>
        </section>
    );
}
