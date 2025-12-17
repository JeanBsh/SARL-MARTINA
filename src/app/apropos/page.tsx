import Stats from "@/components/home/Stats";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">À Propos de SARL MARTINA</h1>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
                    <p>
                        Fondée en 2022, SARL MARTINA est une entreprise de travaux tous corps d’état (TCE) spécialisée en rénovation et en construction neuve. Nous accompagnons particuliers et professionnels sur des chantiers complets ou partiels : coordination des corps de métier, exécution soignée et finitions de qualité.
                    </p>
                    <p>
                        Notre priorité : un travail sérieux, des délais maîtrisés et une communication transparente du début à la livraison. Basés à Vitry-sur-Seine, nous intervenons dans toute l’Île-de-France et au-delà pour donner vie à vos projets, du gros œuvre aux finitions.
                    </p>
                </div>
                <Stats />
            </div>
        </main>
    );
}
