"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { label: "Année de Création", value: "2022" },
    { label: "Satisfaction Client", value: "100%" },
    { label: "Projets Réalisés", value: "50+" },
    { label: "Délais Respectés", value: "100%" },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 bg-background border-b border-border/50">
            <div className="container mx-auto px-4">
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-gray-500 mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
