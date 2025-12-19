import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-20">
                    <div className="relative w-64 h-32 mb-4">
                        <Image
                            src="/logo.png"
                            alt="SARL MARTINA"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight">Contactez-nous</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Vous avez un projet de rénovation ou de construction ? <br className="hidden md:block" />
                        Notre équipe est à votre écoute pour concrétiser vos envies, de la conception à la réalisation.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
                    <div className="flex flex-col items-center text-center p-8 bg-card border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Phone className="w-8 h-8 text-architectural-blue" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                        <p className="text-muted-foreground mb-4">Du Lundi au Samedi</p>
                        <a href="tel:0612345678" className="text-lg font-semibold hover:text-architectural-blue transition-colors">06 12 34 56 78</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-card border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-architectural-blue" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground mb-4">Réponse sous 24h</p>
                        <a href="mailto:sarlmartina.tce@gmail.com" className="text-base font-semibold hover:text-architectural-blue transition-colors break-all">sarlmartina.tce@gmail.com</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-card border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Clock className="w-8 h-8 text-architectural-blue" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Horaires</h3>
                        <p className="text-muted-foreground mb-4">Ouverture</p>
                        <div className="space-y-1 text-sm font-medium">
                            <p>Lun - Ven: 08h00 - 19h00</p>
                            <p>Samedi: 08h00 - 19h00</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-secondary/5 border border-secondary/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-architectural-blue to-transparent opacity-50"></div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Prêt à démarrer votre projet ?</h2>
                    <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                        Obtenez une estimation précise et chiffrée de vos travaux rapidement grâce à notre formulaire en ligne intelligent.
                    </p>
                    <Button asChild size="lg" className="px-10 py-7 text-lg rounded-full shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all transform hover:-translate-y-1 bg-architectural-blue hover:bg-blue-900 text-white">
                        <Link href="/devis">
                            Faire une demande de devis <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
