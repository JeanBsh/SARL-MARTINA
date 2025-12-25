"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)

const initialTestimonials = [
    {
        id: "1",
        text: "Une transformation incroyable de notre espace de vie. L'équipe a su capter notre vision et l'exécuter avec une précision chirurgicale.",
        author_name: "Marie Laurent",
        relative_time_description: "Propriétaire", // Fallback usage
        profile_photo_url: "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
        rating: 5
    },
    {
        id: "2",
        text: "Le professionnalisme et la qualité des finitions sont incomparables. Un chantier propre et livré dans les temps.",
        author_name: "Thomas Dubois",
        relative_time_description: "Architecte",
        profile_photo_url: "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
        rating: 5
    },
    {
        id: "3",
        text: "Faire appel à SARL MARTINA a été la meilleure décision pour notre rénovation électrique et plomberie. Un travail d'expert.",
        author_name: "Sophie Martin",
        relative_time_description: "Gérante",
        profile_photo_url: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
        rating: 5
    },
]

export default function TestimonialsEditorial() {
    const [reviews, setReviews] = useState(initialTestimonials)
    const [active, setActive] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('/api/google-reviews');
                const data = await response.json();
                if (data?.result?.reviews) {
                    // Map API key data to match our structure if needed, or just use it directly
                    // We expect the API to return standard Google Places review objects
                    setReviews(data.result.reviews.slice(0, 5)); // Limit to 5 reviews
                }
            } catch (error) {
                console.error("Failed to fetch Google reviews", error);
            }
        }
        fetchReviews();
    }, []);

    const handleChange = (index: number) => {
        if (index === active || isTransitioning) return
        setIsTransitioning(true)
        setTimeout(() => {
            setActive(index)
            setTimeout(() => setIsTransitioning(false), 50)
        }, 300)
    }

    const handlePrev = () => {
        const newIndex = active === 0 ? reviews.length - 1 : active - 1
        handleChange(newIndex)
    }

    const handleNext = () => {
        const newIndex = active === reviews.length - 1 ? 0 : active + 1
        handleChange(newIndex)
    }

    // Default current to initial if array is empty (shouldn't happen with initial state)
    const current = reviews[active] || initialTestimonials[0];

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
                    Ce que nos clients disent
                </h2>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <GoogleLogo />
                    <span className="font-medium text-foreground">Avis Google</span>
                    <span>•</span>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Large index number */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <span
                    className="hidden md:block text-[120px] font-light leading-none text-foreground/5 select-none transition-all duration-500 font-serif"
                    style={{ fontFeatureSettings: '"tnum"' }}
                >
                    {String(active + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 pt-2 md:pt-6 relative min-h-[300px]">
                    {/* Quote */}
                    <div className={`transition-all duration-500 ${isTransitioning ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
                        <div className="flex gap-1 mb-6">
                            {[...Array(current.rating || 5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <blockquote
                            className="text-xl md:text-2xl font-light leading-relaxed text-foreground tracking-tight"
                        >
                            &ldquo;{current.text}&rdquo;
                        </blockquote>

                        {/* Author info */}
                        <div className="mt-8 flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-foreground/10">
                                <Image
                                    src={current.profile_photo_url || "/placeholder.svg"}
                                    alt={current.author_name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{current.author_name}</p>
                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    {current.relative_time_description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Navigation - vertical line selector */}
            <div className="mt-12 md:mt-0 flex items-center justify-between pl-0 md:pl-[calc(120px+3rem)]">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        {reviews.map((_, index) => (
                            <button key={index} onClick={() => handleChange(index)} className="group relative py-4 outline-none">
                                <span
                                    className={`block h-0.5 rounded-full transition-all duration-500 ease-out ${index === active
                                        ? "w-12 bg-foreground"
                                        : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-full border border-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-full border border-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                        aria-label="Next review"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

