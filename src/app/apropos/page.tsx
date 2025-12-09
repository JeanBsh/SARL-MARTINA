import Stats from "@/components/home/Stats";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">À Propos de SARL MARTINA</h1>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
                    <p>
                        Fondée en 2022, SARL MARTINA s'est imposée comme une référence de la rénovation tous corps d'état à Vitry-sur-Seine et ses environs.
                    </p>
                    <p>
                        Notre engagement envers l'excellence et la satisfaction client nous pousse à dépasser les standards habituels du bâtiment.
                        Nous combinons techniques traditionnelles et design moderne pour donner vie à vos projets les plus ambitieux.
                    </p>
                </div>
                <Stats />
            </div>
        </main>
    );
}
