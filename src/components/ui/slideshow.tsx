"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const slides = [
    {
        img: "/images/img (9).jpeg",
        text: ["ART DE VIVRE", "MODERNE"],
    },
    {
        img: "/images/img (5).jpeg",
        text: ["CONCEPTION", "SUR MESURE"],
    },
    {
        img: "/images/img (13).jpeg",
        text: ["ELEGANCE", "INTEMPORELLE"],
    },
    {
        img: "/images/img (15).jpeg",
        text: ["LUMIERE", "ET ESPACE"],
    },
    {
        img: "/images/img (2).jpeg",
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
        <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
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
                                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-center opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-forwards will-change-[transform,opacity]"
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




        </div>
    );
}
