import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BeforeAfter from "@/components/home/BeforeAfter";
import TestimonialsEditorial from "@/components/ui/editorial-testimonial";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />

      {/* Services CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Nos Services</h2>
          <p className="mb-10 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            De la rénovation complète à la construction neuve, nous maîtrisons tous les corps d'état pour donner vie à vos projets les plus ambitieux.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/services">Découvrir tous nos services</Link>
          </Button>
        </div>
      </section>

      <BeforeAfter />
      <TestimonialsEditorial />
    </main>
  );
}
