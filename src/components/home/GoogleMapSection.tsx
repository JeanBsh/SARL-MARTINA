"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GoogleMapSection() {
    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 mb-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold font-serif mb-4"
                >
                    Notre Zone d'Intervention
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    Basés à Vitry-sur-Seine, nous intervenons dans toute l'Île-de-France pour réaliser vos projets.
                </motion.p>
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                >
                    {/* Google Maps Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21056.24835698064!2d2.3789!3d48.7885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673994e64593b%3A0x67396c0397750794!2sVitry-sur-Seine!5e0!3m2!1sfr!2sfr!4v1709923456789!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                    ></iframe>


                </motion.div>
            </div>
        </section>
    );
}
