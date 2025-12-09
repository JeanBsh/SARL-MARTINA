import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="relative bg-[#0f172a] text-gray-300 mt-20 pt-20 pb-10 overflow-hidden">
            {/* Slanted Top Background Effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-gray-200 to-white -skew-y-2 origin-top-left transform -translate-y-1/2 z-0 opacity-10" />
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-background">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[#0f172a] font-bold text-xl font-serif">
                                M
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-white">SARL MARTINA</h3>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-gray-400">
                            Entreprise de rénovation tous corps d'état basée à Vitry-sur-Seine.
                            Qualité, respect des délais et finitions haut de gamme.
                        </p>
                    </div>

                    {/* Enterprise Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Entreprise</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/apropos" className="hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Horaires</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between max-w-[200px]">
                                <span>Lun - Ven</span>
                                <span className="text-white">8h - 19h</span>
                            </div>
                            <div className="flex justify-between max-w-[200px]">
                                <span>Samedi</span>
                                <span className="text-white">8h - 19h</span>
                            </div>
                            <div className="flex justify-between max-w-[200px]">
                                <span>Dimanche</span>
                                <span className="text-gray-500">Fermé</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div>
                        © {new Date().getFullYear()} SARL MARTINA. Tous droits réservés.
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Capital 10 000 €</span>
                        <span>•</span>
                        <span>RCS Créteil 915 060 404</span>
                        <span>•</span>
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
