import BeforeAfterProject from "@/components/realisations/BeforeAfterProject";

const projects = [
    {
        id: 1,
        title: "Rénovation complète des WC",
        category: "Rénovation Totale",
        before: "/images/img (18).jpeg",
        after: "/images/img (7).jpeg",
        description: "Les WC ont fait l’objet d’une rénovation totale comprenant la dépose de l’existant, la reprise de la plomberie, l’habillage mural et l’installation d’équipements modernes, pour un espace fonctionnel et esthétique."
    },
    {
        id: 2,
        title: "Rénovation complète de salle de bain",
        category: "Intérieur & Parquets",
        before: "/images/img (14).jpeg",
        after: "/images/img (11).jpeg",
        description: "La salle de bain a été entièrement rénovée, incluant la modification des réseaux, la création d’une douche moderne, la pose de nouveaux revêtements, l’installation du mobilier et de l’éclairage, avec une attention particulière portée aux finitions."
    },
    {
        id: 3,
        title: "Aménagement des combles et création d’escalier",
        category: "Cuisine",
        before: "/images/img (21).jpeg",
        after: "/images/img (16).jpeg",
        description: "L’ensemble des combles a été entièrement aménagé par nos équipes, avec la réalisation de l’isolation thermique, des structures, des réseaux électriques et des finitions intérieures. Un escalier sur mesure a été créé et installé afin d’assurer un accès sécurisé et parfaitement intégré à l’espace existant."
    },
    {
        id: 4,
        title: "Création d’une cuisine sur mesure",
        category: "Professionnel",
        before: "/images/img (19).jpeg", // Placeholder
        after: "/images/img (9).jpeg",
        description: "La cuisine a été entièrement conçue et réalisée par nos équipes, incluant la reprise des réseaux, l’électricité, l’éclairage intégré, la pose du mobilier sur mesure et des équipements. L’ensemble offre un espace moderne, fonctionnel et parfaitement optimisé, avec des finitions haut de gamme."
    }
];

export default function Realisations() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Nos Réalisations</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Découvrez quelques-unes de nos réalisations et le savoir-faire qui les accompagne.
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
        </main >
    );
}
