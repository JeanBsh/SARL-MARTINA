"use client";

import { motion } from "framer-motion";
import { Hammer, Paintbrush, Zap, Droplets, BrickWall, BoxSelect, Eraser, Ruler, ScanLine, Home, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
    {
        icon: Home,
        title: "Rénovation Totale",
        desc: "Transformation complète de votre habitat.",
        className: "md:col-span-2 md:row-span-2",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Paintbrush,
        title: "Peinture Intérieure",
        desc: "Finitions soignées et décors.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Droplets,
        title: "Plomberie",
        desc: "Installation et rénovation sanitaire.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Zap,
        title: "Électricité",
        desc: "Mise aux normes et éclairage.",
        className: "",
        imageUrl: "/images/electricite.png"
    },
    {
        icon: Hammer,
        title: "Menuiserie",
        desc: "Sur mesure et standard.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: BoxSelect,
        title: "Carrelage & Faïence",
        desc: "Pose experte tous formats.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: BrickWall,
        title: "Maçonnerie",
        desc: "Gros œuvre et petites reprises.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Eraser,
        title: "Isolation",
        desc: "Confort thermique et phonique.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: ScanLine,
        title: "Cloison",
        desc: "Aménagement des espaces.",
        className: "",
        imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Ruler,
        title: "Façade",
        desc: "Ravalement et peinture extérieure.",
        className: "md:col-span-2",
        imageUrl: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&q=80&w=1000"
    },
];

export default function Services() {
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
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
        </section>
    );
}
