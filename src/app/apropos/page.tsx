"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Users, HardHat, CheckCircle2 } from "lucide-react";
import Stats from "@/components/home/Stats";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Hero Section - Premium Design */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/img (14).jpeg"
                        alt="Architecture Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    {/* Gradient for text pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="inline-block mb-6 text-sm md:text-base text-white uppercase tracking-[0.3em] font-medium"
                        >
                            Notre Histoire
                        </motion.span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-white tracking-tighter leading-[0.9]">
                            L'ART DE MAGNIFIER <br />
                            <span className="font-sans font-light text-white/90">votre espace</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
                            Plus qu'une entreprise de travaux, un partenaire créatif pour réinventer votre lieu de vie.
                        </p>
                    </motion.div>
                </div>


            </section>

            {/* Story & Image Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold">Notre Mission</h2>
                                <div className="h-1 w-20 bg-architectural-blue" />
                            </div>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Fondée en 2022, <strong className="text-foreground">SARL MARTINA</strong> est bien plus qu'une simple entreprise de travaux. Nous sommes une équipe d'artisans passionnés, spécialisés dans la rénovation tous corps d’état (TCE) et la construction neuve.
                                </p>
                                <p>
                                    Que vous soyez un particulier rêvant d'un intérieur sur-mesure ou un professionnel cherchant à optimiser ses locaux, nous mettons notre expertise globale à votre service. Notre force ? Une coordination sans faille des différents corps de métier pour un chantier serein.
                                </p>
                                <p>
                                    Basés à <span className="text-foreground font-medium">Vitry-sur-Seine</span>, nous intervenons dans toute l’Île-de-France avec une seule priorité : transformer vos idées en réalité durable, du gros œuvre aux finitions les plus fines.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="bg-gradient-to-r from-architectural-blue to-blue-700 hover:scale-105 transition-transform duration-300" asChild>
                                    <Link href="/contact">Démarrer votre projet</Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Image Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10">
                                <Image
                                    src="/images/img (11).jpeg"
                                    alt="Rénovation intérieur moderne"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white p-4">
                                    <p className="font-bold text-xl mb-1">Expertise & Finitions</p>
                                    <p className="text-white/80 text-sm">Des matériaux de qualité pour un rendu exceptionnel.</p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-2/3 h-2/3 border-2 border-architectural-blue/20 rounded-2xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-secondary/30 rounded-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-secondary/5 relative border-y border-border/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
                        <p className="text-muted-foreground">Nos valeurs fondamentales guident chacune de nos actions sur le terrain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={ShieldCheck}
                            title="Confiance & Transparence"
                            description="Pas de mauvaises surprises. Des devis clairs, une communication honnête et un suivi régulier de l'avancement."
                        />
                        <ValueCard
                            icon={Award}
                            title="Qualité Supérieure"
                            description="Nous ne faisons aucun compromis sur la qualité des matériaux et le soin apporté aux finitions."
                        />
                        <ValueCard
                            icon={Clock}
                            title="Délais Respectés"
                            description="Nous savons que votre temps est précieux. Nous nous engageons à respecter le planning convenu."
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section with improved spacing */}
            <div className="py-10">
                <Stats />
            </div>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Un projet en tête ?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Discutons de vos besoins et trouvons ensemble la meilleure solution pour votre habitat ou vos locaux professionnels.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-14 px-8 text-lg bg-architectural-blue hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all" asChild>
                            <Link href="/devis">Demander un Devis Gratuit</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg hover:bg-white" asChild>
                            <Link href="/contact">Nous Contacter</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ValueCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-architectural-blue">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
