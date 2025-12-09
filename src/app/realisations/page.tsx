import Image from "next/image";

const projects = [
    { id: 1, title: "Appartement Vitry", category: "Rénovation Totale", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800" },
    { id: 2, title: "Cuisine Moderne", category: "Cuisine", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800" },
    { id: 3, title: "Salle de Bain Zen", category: "Salle de Bain", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800" },
    { id: 4, title: "Salon Haussmannien", category: "Peinture & Parquet", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" },
    { id: 5, title: "Maison Complète", category: "Rénovation Totale", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
    { id: 6, title: "Bureau Professionnel", category: "Aménagement", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
];

export default function Realisations() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
                    <p className="text-muted-foreground">Une sélection de nos plus beaux chantiers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl bg-secondary/20 aspect-[4/3] cursor-pointer">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                                <p className="text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform delay-75 text-gold">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
