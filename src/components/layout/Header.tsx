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

    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                !isTransparent
                    ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 py-3 text-foreground"
                    : "bg-transparent py-5 text-white"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
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

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden",
                        !isTransparent ? "text-foreground" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-background border-b md:hidden flex flex-col p-4 space-y-4 shadow-xl"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground hover:text-architectural-blue"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full">
                                <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)}>
                                    Demander un devis
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
