import QuoteForm from "@/components/quote/QuoteForm";

export default function QuotePage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-secondary/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-architectural-blue/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Demandez votre Devis</h1>
                    <p className="text-xl text-muted-foreground">Gratuit et sans engagement. Réponse sous 24h/48h.</p>
                </div>

                <QuoteForm />
            </div>
        </main>
    );
}
