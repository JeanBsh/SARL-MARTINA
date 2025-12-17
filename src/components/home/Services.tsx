"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Paintbrush, Zap, Droplets, BrickWall, BoxSelect, Eraser, Ruler, ScanLine, Home, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
    {
        icon: Home,
        title: "Rénovation Totale",
        desc: "Transformation complète de votre habitat.",
        details: "Nous prenons en charge l'intégralité de votre projet de rénovation, de la démolition aux finitions. Notre équipe coordonne tous les corps de métier pour vous livrer un chantier clé en main, respectant vos délais et votre budget. Idéal pour les remises à neuf d'appartements ou de maisons anciennes.",
        className: "md:col-span-2 md:row-span-2",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Paintbrush,
        title: "Peinture Intérieure",
        desc: "Finitions soignées et décors.",
        details: "Nos peintres experts utilisent des produits de haute qualité pour sublimer vos murs et plafonds. Nous proposons une large gamme de finitions (mate, satinée, laquée) et d'effets décoratifs pour créer l'ambiance qui vous ressemble.",
        className: "",
        imageUrl: "/images/peinture.jpg"
    },
    {
        icon: Droplets,
        title: "Plomberie",
        desc: "Installation et rénovation sanitaire.",
        details: "Installation de sanitaires, création de salles de bain, rénovation de cuisines ou dépannage d'urgence. Nos plombiers qualifiés assurent des travaux conformes aux normes en vigueur pour votre confort et votre sécurité.",
        className: "",
        imageUrl: "/images/plomberie.jpg"
    },
    {
        icon: Zap,
        title: "Électricité",
        desc: "Mise aux normes et éclairage.",
        details: "Mise en sécurité, rénovation complète de votre installation électrique, pose d'éclairages architecturaux. Nous intervenons dans le respect strict de la norme NF C 15-100 pour garantir la sécurité de votre habitat.",
        className: "",
        imageUrl: "/images/electricite.png"
    },
    {
        icon: Hammer,
        title: "Menuiserie",
        desc: "Sur mesure et standard.",
        details: "Pose de fenêtres, portes, placards sur mesure, parquets ou terrasses bois. Nos menuisiers allient esthétisme et isolation performante pour valoriser votre intérieur et votre extérieur.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        icon: BoxSelect,
        title: "Carrelage & Faïence",
        desc: "Pose experte tous formats.",
        details: "Pose de carrelage grand format, mosaïque, faïence de salle de bain. Nous assurons une préparation minutieuse des supports et une pose soignée pour un résultat durable et esthétique.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1585773817924-d025be342055?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        icon: BrickWall,
        title: "Maçonnerie",
        desc: "Gros œuvre et petites reprises.",
        details: "Ouverture de murs porteurs, création de cloisons, chapes, dalles béton ou aménagements extérieurs. Notre savoir-faire en maçonnerie générale est le socle de la solidité de votre rénovation.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Eraser,
        title: "Isolation",
        desc: "Confort thermique et phonique.",
        details: "Isolation des combles, des murs par l'intérieur (ITI). Nous vous aidons à améliorer la performance énergétique de votre logement et à réduire vos factures de chauffage.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        icon: ScanLine,
        title: "Cloison",
        desc: "Aménagement des espaces.",
        details: "Redistribution des pièces, création de séparations, doublage des murs. Nous modifions l'agencement de votre espace de vie pour l'adapter à vos nouveaux besoins et modes de vie.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=800"
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Nos Expertises</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Une maîtrise complète de tous les corps d'état pour réaliser vos projets sans compromis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${service.title}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                layout: { duration: 0.25, ease: "easeOut" }, // Fast closing animation (shrinking back)
                                opacity: { duration: 0.5, delay: index * 0.05 },
                                scale: { duration: 0.5 }
                            }}
                            onClick={() => setSelectedService(service)}
                            className={cn(
                                "group rounded-3xl overflow-hidden relative cursor-pointer",
                                service.className
                            )}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-white/0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedService.title}`}
                            transition={{
                                layout: { type: "spring", stiffness: 300, damping: 30 }, // Smooth opening
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden relative z-10 shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header Image */}
                            <div className="relative h-64 sm:h-80 w-full shrink-0">
                                <Image
                                    src={selectedService.imageUrl}
                                    alt={selectedService.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            <selectedService.icon size={20} />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                                            Détails du service
                                        </div>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        {selectedService.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 overflow-y-auto">
                                <p className="text-xl text-zinc-600 mb-6 leading-relaxed">
                                    {selectedService.details}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Pourquoi nous choisir ?</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Expertise certifiée",
                                            "Devis gratuit & détaillé",
                                            "Respect des délais",
                                            "Garantie décennale",
                                            "Matériaux de qualité",
                                            "Suivi de chantier"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-zinc-700">
                                                <CheckCircle2 size={18} className="text-primary shrink-0" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={() => {
                                            setSelectedService(null);
                                            // Optional: Navigate to contact or scroll to contact
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                                    >
                                        Demander un devis
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
