"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/rejected cookies
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t shadow-lg md:m-4 md:rounded-lg md:max-w-xl md:left-auto md:border animate-in slide-in-from-bottom duration-300">
            <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg text-slate-900">Utilisation des cookies</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Nous utilisons des cookies pour optimiser votre expérience sur notre site, mesurer l'audience et vous proposer des contenus adaptés.
                            En continuant votre navigation, vous acceptez l'utilisation de ces cookies.
                            Pour en savoir plus, consultez notre <Link href="/politique-de-confidentialite" className="text-primary hover:underline font-medium">politique de confidentialité</Link>.
                        </p>
                    </div>
                    <button
                        onClick={declineCookies}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="Fermer"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button onClick={acceptCookies} className="w-full sm:w-auto">
                        Accepter
                    </Button>
                    <Button variant="outline" onClick={declineCookies} className="w-full sm:w-auto">
                        Refuser / Continuer sans accepter
                    </Button>
                </div>
            </div>
        </div>
    );
}
