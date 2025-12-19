"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
    id: number;
    title: string;
    category: string;
    before: string;
    after: string;
    description?: string;
}

export default function BeforeAfterProject({ project }: { project: Project }) {
    const [viewMode, setViewMode] = useState<"before" | "after">("after");
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="w-full mb-24 last:mb-0">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

                {/* Text Content */}
                <div className="lg:w-1/3 space-y-6">
                    <div>
                        <span className="text-architectural-blue font-bold tracking-widest uppercase text-sm mb-2 block">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">{project.title}</h2>
                        <div className="h-1 w-16 bg-architectural-blue mb-6" />
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {project.description || "Une transformation complète mettant en valeur les volumes et la lumière. Nos équipes ont travaillé sur chaque détail pour un résultat à la hauteur des attentes."}
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-secondary/30 p-1.5 rounded-full border border-border/50">
                            <button
                                onClick={() => setViewMode("before")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                                    viewMode === "before"
                                        ? "bg-white text-black shadow-md"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                                )}
                            >
                                AVANT
                            </button>
                            <button
                                onClick={() => setViewMode("after")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                                    viewMode === "after"
                                        ? "bg-architectural-blue text-white shadow-md"
                                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                                )}
                            >
                                APRÈS
                            </button>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="lg:w-2/3 w-full relative group">
                    <div
                        className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-100 cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={viewMode}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={viewMode === "before" ? project.before : project.after}
                                    alt={`${project.title} - ${viewMode === "before" ? "Avant" : "Après"}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Zoom Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm p-3 rounded-full text-white pointer-events-none">
                            <Maximize2 className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-architectural-blue/10 rounded-full blur-2xl -z-10" />
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
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

                        <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={viewMode === "before" ? project.before : project.after}
                                alt={`${project.title} - Full`}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                {viewMode === "before" ? "État d'origine" : "Résultat Final"}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
