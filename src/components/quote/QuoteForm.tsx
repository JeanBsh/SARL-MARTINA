"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema, FormValues } from "@/lib/schemas";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronRight, ChevronLeft, Check } from "lucide-react";

const MAX_STEPS = 3;

export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [isPro, setIsPro] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clientType: "particulier",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            postalCode: "",
            city: "",
            projectType: "",
            budget: "",
            description: "",
        },
        mode: "onChange"
    });

    const onSubmit = (data: FormValues) => {
        // Simulate submission
        console.log(data);
        alert("Merci ! Votre demande de devis a été envoyée avec succès.");
        form.reset();
        setStep(1);
    };

    const nextStep = async () => {
        let valid = false;
        if (step === 1) valid = await form.trigger(["firstName", "lastName", "email", "phone", "clientType"]);
        if (step === 2) valid = await form.trigger(["address", "postalCode", "city", "projectType", "budget"]);

        if (valid) {
            setStep((s) => s + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setStep((s) => s - 1);
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8 flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-secondary -z-10" />
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? "bg-architectural-blue text-white shadow-lg" : "bg-secondary text-muted-foreground"}`}>
                        {step > s ? <Check size={20} /> : s}
                    </div>
                ))}
            </div>

            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm dark:bg-black/50">
                <CardContent className="p-6 md:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-xl font-bold mb-4">Vos Coordonnées</h3>
                                        <FormField
                                            control={form.control}
                                            name="clientType"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
                                                    <div className="space-y-0.5">
                                                        <FormLabel className="text-base">Vous êtes un professionnel</FormLabel>
                                                        <FormDescription>
                                                            Activez si vous représentez une entreprise
                                                        </FormDescription>
                                                    </div>
                                                    <FormControl>
                                                        <Switch
                                                            checked={isPro}
                                                            onCheckedChange={(checked) => {
                                                                setIsPro(checked);
                                                                field.onChange(checked ? "professionnel" : "particulier");
                                                            }}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="firstName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Prénom</FormLabel>
                                                    <FormControl><Input placeholder="Jean" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="lastName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nom</FormLabel>
                                                    <FormControl><Input placeholder="Dupont" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl><Input placeholder="jean.dupont@example.com" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="phone" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Téléphone</FormLabel>
                                                <FormControl><Input placeholder="06 12 34 56 78" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-xl font-bold mb-4">Votre Projet</h3>
                                        <FormField control={form.control} name="address" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Adresse du chantier</FormLabel>
                                                <FormControl><Input placeholder="123 Rue de la Rénovation" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField control={form.control} name="postalCode" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Code Postal</FormLabel>
                                                    <FormControl><Input placeholder="94400" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="city" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Ville</FormLabel>
                                                    <FormControl><Input placeholder="Vitry-sur-Seine" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                        <FormField control={form.control} name="projectType" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Type de travaux</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Sélectionnez un type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="renovation_totale">Rénovation Totale</SelectItem>
                                                        <SelectItem value="peinture">Peinture</SelectItem>
                                                        <SelectItem value="electricite">Électricité</SelectItem>
                                                        <SelectItem value="plomberie">Plomberie</SelectItem>
                                                        <SelectItem value="autre">Autre</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="budget" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Budget Estimé (€)</FormLabel>
                                                <FormControl><Input placeholder="Ex: 5000" type="number" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-xl font-bold mb-4">Détails & Photos</h3>
                                        <FormField control={form.control} name="description" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description détaillée</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Décrivez votre projet..." className="min-h-[150px]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="space-y-2">
                                            <FormLabel>Photos (Optionnel)</FormLabel>
                                            <div className="border-2 border-dashed border-input hover:border-architectural-blue transition-colors rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground bg-secondary/5 cursor-pointer">
                                                <Upload className="mb-2" />
                                                <p className="text-sm">Glissez vos fichiers ou cliquez pour sélectionner</p>
                                                <input type="file" className="hidden" multiple />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-between pt-4">
                                {step > 1 && (
                                    <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                                        <ChevronLeft size={16} /> Précédent
                                    </Button>
                                )}
                                {step < MAX_STEPS ? (
                                    <Button type="button" onClick={nextStep} className="ml-auto gap-2 bg-architectural-blue hover:bg-blue-600">
                                        Suivant <ChevronRight size={16} />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="ml-auto gap-2 bg-green-600 hover:bg-green-700 text-white">
                                        Envoyer <Check size={16} />
                                    </Button>
                                )}
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
