import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contactez-nous</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center p-8 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
                        <Phone className="w-10 h-10 mb-4 text-architectural-blue" />
                        <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                        <p className="text-muted-foreground">06 12 34 56 78</p>
                        <Button variant="link" className="mt-4">Appeler</Button>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
                        <Mail className="w-10 h-10 mb-4 text-architectural-blue" />
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground">sarlmartina.tce@gmail.com</p>
                        <Button variant="link" className="mt-4" asChild><a href="mailto:sarlmartina.tce@gmail.com">Écrire</a></Button>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
                        <MapPin className="w-10 h-10 mb-4 text-architectural-blue" />
                        <h3 className="text-xl font-bold mb-2">Adresse</h3>
                        <p className="text-muted-foreground">172 Rue Julian Grimau<br />94400 Vitry-sur-Seine</p>
                        <Button variant="link" className="mt-4" asChild><a href="https://maps.google.com">Voir sur la carte</a></Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
