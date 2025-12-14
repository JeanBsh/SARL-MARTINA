import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import TestimonialsEditorial from "@/components/ui/editorial-testimonial";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <Services />
      <BeforeAfter />
      <TestimonialsEditorial />
    </main>
  );
}
