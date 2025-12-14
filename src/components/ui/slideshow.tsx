"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const slides = [
    {
        img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2664&auto=format&fit=crop",
        text: ["ART DE VIVRE", "MODERNE"],
    },
    {
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
        text: ["CONCEPTION", "SUR MESURE"],
    },
    {
        img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop",
        text: ["ELEGANCE", "INTEMPORELLE"],
    },
    {
        img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
        text: ["LUMIERE", "ET ESPACE"],
    },
    {
        img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop",
        text: ["FINITIONS", "D'EXCEPTION"],
    },
];

export default function Slideshow({ showText = true }: { showText?: boolean }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out",
                        i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                >
                    <div className="absolute inset-0">
                        <Image
                            src={slide.img}
                            alt={slide.text.join(" ")}
                            fill
                            className="object-cover brightness-50"
                            priority={i === 0}
                        />
                    </div>

                    {showText && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                            <div className="flex flex-col items-center gap-2">
                                {slide.text.map((t, j) => (
                                    <span
                                        key={j}
                                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-center opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-forwards"
                                        style={{ animationDelay: `${300 + j * 150}ms`, animationFillMode: 'forwards' }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Controls */}
            <div className="absolute bottom-12 left-12 flex gap-4 z-30">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors"
                >
                    <ArrowRight className="h-5 w-5" />
                </Button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-12 right-12 z-30 text-white font-mono text-lg tracking-widest">
                0{current + 1} / 0{slides.length}
            </div>
        </div>
    );
}
