"use client";

import { useState, useRef } from "react";
import { GripVertical } from "lucide-react";
import Image from "next/image";

export default function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let clientX;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = (e as React.MouseEvent).clientX;
        }

        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    };

    return (
        <section className="py-24 bg-secondary/20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Avant / Après</h2>
                    <p className="text-muted-foreground">La preuve par l'image : Rénovation Totale.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border-4 border-white dark:border-gray-800"
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                >
                    {/* AFTER Image (Background) */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                            alt="Intérieur rénové (Après)"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">APRÈS</div>
                    </div>

                    {/* BEFORE Image (Foreground, clipped) */}
                    <div
                        className="absolute inset-0 bg-white"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
                            alt="Intérieur avant travaux (Avant)"
                            fill
                            className="object-cover grayscale" // Grayscale for dramatic effect
                        />
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">AVANT</div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-architectural-blue text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                            <GripVertical size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
