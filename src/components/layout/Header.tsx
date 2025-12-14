"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À Propos", href: "/apropos" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Also fix potential layout shifts
            document.body.style.height = '100dvh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = '';
            document.body.style.removeProperty('padding-right');
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = '';
            document.body.style.removeProperty('padding-right');
        };
    }, [isMobileMenuOpen]);

    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

    // Overlay Variants
    const overlayVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } }
    };

    // Drawer Variants
    const drawerVariants = {
        initial: { x: "-100%" },
        animate: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            x: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, x: -20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    !isTransparent
                        ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 py-3 text-foreground"
                        : "bg-transparent py-5 text-white"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50">
                        SARL <span className={cn("text-architectural-blue", isTransparent && "text-white")}>MARTINA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    !isTransparent
                                        ? (pathname === link.href ? "text-architectural-blue" : "text-muted-foreground hover:text-architectural-blue")
                                        : (pathname === link.href ? "text-white" : "text-white/80 hover:text-white")
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                                    !isTransparent ? "bg-architectural-blue" : "bg-white"
                                )} />
                            </Link>
                        ))}
                        <Button asChild className={cn(
                            "transition-shadow",
                            isTransparent ? "bg-white text-black hover:bg-white/90" : "bg-gradient-to-r from-architectural-blue to-blue-600"
                        )}>
                            <Link href="/devis">Demander un devis</Link>
                        </Button>
                    </nav>

                    {/* Mobile Toggle Button */}
                    <button
                        className={cn(
                            "md:hidden p-2 transition-opacity duration-200 focus:outline-none",
                            !isTransparent ? "text-foreground" : "text-white",
                            isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                        )}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay & Drawer - Rendered outside header to avoid backdrop-filter containment */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            variants={overlayVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ height: '100dvh' }} // Force full viewport height
                        />

                        <motion.div
                            variants={drawerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed top-0 left-0 w-[85vw] max-w-sm bg-white z-[70] md:hidden shadow-2xl flex flex-col p-8 overflow-y-auto"
                            style={{ height: '100dvh' }} // Force full viewport height
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between mb-12 shrink-0">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-black">
                                    SARL <span className="text-architectural-blue">MARTINA</span>
                                </Link>

                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors text-black border border-gray-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <nav className="flex flex-col space-y-6 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        variants={itemVariants}
                                        transition={{ delay: i * 0.05 + 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-bold uppercase tracking-[0.2em] transition-colors relative inline-block py-1",
                                                pathname === link.href ? "text-architectural-blue" : "text-zinc-800 hover:text-architectural-blue"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            {pathname === link.href && (
                                                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-architectural-blue" />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom Info Section */}
                            <div className="mt-12 space-y-8 shrink-0">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-black">Rendez-nous visite</h3>
                                    <div className="space-y-2 text-sm text-gray-500 font-sans leading-relaxed">
                                        <p className="font-medium text-black">Siège social</p>
                                        <p>Vitry-sur-Seine (94)</p>
                                        <p>Île-de-France</p>

                                        <div className="h-2"></div>
                                        <p className="font-medium text-black">Horaires</p>
                                        <p>Lun - Ven: 8h00 - 19h00</p>
                                        <p>Sam: 8h00 - 19h00</p>

                                        <div className="h-2"></div>
                                        <Link href="mailto:contact@sarl-martina.fr" className="text-architectural-blue hover:underline block mt-2">
                                            contact@sarl-martina.fr
                                        </Link>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-between group cursor-pointer" onClick={() => { setIsMobileMenuOpen(false); }}>
                                        <Link href="/devis" className="text-xs font-bold uppercase tracking-[0.15em] text-black group-hover:text-architectural-blue transition-colors">
                                            Demander un devis
                                        </Link>
                                        <div className="w-1.5 h-1.5 rounded-full bg-architectural-blue group-hover:scale-150 transition-transform origin-center" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
