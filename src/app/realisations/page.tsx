import BeforeAfterProject from "@/components/realisations/BeforeAfterProject";

const projects = [
    {
        id: 1,
        title: "Rénovation Villa Moderne",
        category: "Rénovation Totale",
        before: "/images/img (18).jpeg",
        after: "/images/img (7).jpeg",
        description: "Transformation complète d'une villa des années 80. Ouverture des espaces, création d'une mezzanine et modernisation des façades pour une luminosité optimale."
    },
    {
        id: 2,
        title: "Appartement Haussmannien",
        category: "Intérieur & Parquets",
        before: "/images/img (14).jpeg",
        after: "/images/img (11).jpeg",
        description: "Restauration des parquets d'époque, moulures et création d'une cuisine ouverte contemporaine s'intégrant parfaitement au charme de l'ancien."
    },
    {
        id: 3,
        title: "Cuisine & Espace de Vie",
        category: "Cuisine",
        before: "/images/img (21).jpeg",
        after: "/images/img (16).jpeg",
        description: "Optimisation de l'espace avec un îlot central sur mesure. Choix de matériaux nobles : marbre et bois massif pour une ambiance chaleureuse."
    },
    {
        id: 4,
        title: "Suite Parentale Luxe",
        category: "Chambre & SDB",
        before: "/images/img (23).jpeg", // Placeholder
        after: "/images/img (15).jpeg",
        description: "Création d'une suite parentale avec salle de bain intégrée. Jeux de transparence et éclairage indirect pour une atmosphère apaisante."
    },
    {
        id: 5,
        title: "Espace Commercial",
        category: "Professionnel",
        before: "/images/img (19).jpeg", // Placeholder
        after: "/images/img (9).jpeg",
        description: "Réaménagement complet d'un plateau de bureaux. Création d'espaces collaboratifs et de boxs insonorisés avec cloisons vitrées."
    }
];

export default function Realisations() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Nos Réalisations</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Chaque projet est une nouvelle histoire. Découvrez comment nous transformons l'existant pour créer des lieux de vie exceptionnels.
                    </p>
                </div>

                <div className="space-y-12">
                    {projects.map((project) => (
                        <BeforeAfterProject key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="fixed top-20 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-30">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob" />
                <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-gray-100 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />
            </div>
        </main>
    );
}
