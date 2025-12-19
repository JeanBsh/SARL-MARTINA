"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRightLeft, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define the projects with their respective Before and After images.
// Using the uploaded images from public/images. 
// Note: Adjust the pairs as needed based on the actual visual content.
const projects = [
    {
        id: 1,
        title: "Rénovation Complète Façade",
        category: "Extérieur",
        before: "/images/img (18).jpeg", // Placeholder choice
        after: "/images/img (7).jpeg",  // Placeholder choice
    },
    {
        id: 2,
        title: "Modernisation Intérieure",
        category: "Salon",
        before: "/images/img (14).jpeg",
        after: "/images/img (11).jpeg",
    },
    {
        id: 3,
        title: "Réhabilitation Cuisine",
        category: "Cuisine",
        before: "/images/img (21).jpeg",
        after: "/images/img (16).jpeg",
    }
];

export default function BeforeAfter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"before" | "after">("after");
    const [direction, setDirection] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const currentProject = projects[0]; // Always show first project only

    // Navigation handlers
    const nextProject = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setViewMode("after"); // Reset to 'After' view on change usually looks better
    };

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setViewMode("after");
    };

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsLightboxOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="py-24 bg-secondary/10 relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Transformations</h2>
                        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Découvrez la magie de nos rénovations. Naviguez entre l'avant et l'après pour apprécier la qualité de nos finitions.
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Image Display */}
                    <div
                        className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 border border-white/20 group cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={`${currentIndex}-${viewMode}`}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Blurred Background for Ambience */}
                                <div className="absolute inset-0 z-0 bg-black/20">
                                    <Image
                                        src={viewMode === "before" ? currentProject.before : currentProject.after}
                                        alt="Background"
                                        fill
                                        className="object-cover blur-3xl scale-110 opacity-70"
                                        priority
                                    />
                                </div>

                                {/* Main Image - Fully Visible */}
                                <Image
                                    src={viewMode === "before" ? currentProject.before : currentProject.after}
                                    alt={`${currentProject.title} - ${viewMode === "before" ? "Avant" : "Après"}`}
                                    fill
                                    className="object-contain z-10 relative drop-shadow-xl"
                                    priority
                                />

                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-20 pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Zoom Hint */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-black/50 backdrop-blur-md text-white p-4 rounded-full">
                                <Maximize2 className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Project Info Badge */}
                        <div className="absolute top-6 left-6 z-20">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                                {currentProject.category}
                            </div>
                        </div>


                    </div>

                    {/* Bottom Controls */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                            <p className="text-muted-foreground">{currentProject.category}</p>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="flex items-center gap-2 bg-secondary/50 p-1.5 rounded-full border border-white/10 shadow-inner">
                            <button
                                onClick={() => setViewMode("before")}
                                className={cn(
                                    "px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                    viewMode === "before"
                                        ? "bg-white text-black shadow-lg scale-105"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                                )}
                            >
                                <span>AVANT</span>
                            </button>
                            <button
                                onClick={() => setViewMode("after")}
                                className={cn(
                                    "px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                    viewMode === "after"
                                        ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                                )}
                            >
                                <span>APRÈS</span>
                            </button>
                        </div>

                        {/* Link to Realisations */}
                        <div className="flex justify-center md:justify-end">
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                                <a href="/realisations">Voir nos réalisations</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full h-12 w-12 z-50"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </Button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={viewMode === "before" ? currentProject.before : currentProject.after}
                                alt={`${currentProject.title} - ${viewMode === "before" ? "Avant" : "Après"}`}
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Lightbox Controls */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                                <div className="bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-white font-medium border border-white/10">
                                    {viewMode === "before" ? "Avant Travaux" : "Après Rénovation"}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

