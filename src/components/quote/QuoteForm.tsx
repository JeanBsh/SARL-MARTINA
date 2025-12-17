"use client";

import { useState, useEffect } from "react";
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
import { Upload, ChevronRight, ChevronLeft, Check, Building2, User } from "lucide-react";

const MAX_STEPS = 3;

const LOTS_OPTIONS = [
    "Totalité", "Placo / Isolation", "Peinture", "Sols (Parquet/Souple)", "Carrelage / Faïence", "Plomberie", "Électricité", "Menuiserie", "Autre"
];

export default function QuoteForm() {
    const [step, setStep] = useState(1);

    // Watch clientType to toggle logic
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clientType: "particulier",
            lots: [],
            // Initialize other fields to empty strings to avoid uncontrolled/controlled warnings if not using form.control properly
            firstName: "", lastName: "", email: "", phone: "", address: "", postalCode: "", city: "",
            description: "", budget: "", accessConstraints: "", proConstraints: "", contactName: "",
            companyName: "", siret: "", surface: ""
        },
        mode: "onChange"
    });

    const clientType = form.watch("clientType");
    const isPro = clientType === "professionnel";

    const onSubmit = (data: FormValues) => {
        console.log(data);
        alert("Merci ! Votre demande de devis détaillée a été envoyée. Nous vous recontacterons sous 24h.");
        form.reset();
        setStep(1);
    };

    const nextStep = async () => {
        let fieldsToValidate: any[] = [];
        if (step === 1) {
            fieldsToValidate = ["clientType", "firstName", "lastName", "email", "phone"];
            if (isPro) fieldsToValidate.push("companyName", "siret");
        }
        if (step === 2) {
            fieldsToValidate = ["address", "postalCode", "city", "projectType"];
            if (isPro) fieldsToValidate.push("siteType", "deliveryDate");
        }

        const valid = await form.trigger(fieldsToValidate);

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
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-8 flex items-center justify-between relative max-w-md mx-auto">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-secondary -z-10" />
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all border-4 ${step >= s ? "bg-white border-architectural-blue text-architectural-blue shadow-lg" : "bg-white border-secondary text-muted-foreground"}`}>
                        {step > s ? <Check size={24} /> : s}
                    </div>
                ))}
            </div>

            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-md dark:bg-black/80">
                <CardContent className="p-6 md:p-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <AnimatePresence mode="wait">
                                {/* STEP 1: IDENTITY */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold mb-2">Qui êtes-vous ?</h3>
                                            <p className="text-muted-foreground">Commençons par faire connaissance.</p>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="clientType"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <div className="flex justify-center gap-4">
                                                        <div
                                                            onClick={() => field.onChange("particulier")}
                                                            className={`cursor-pointer px-6 py-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all w-40 ${field.value === "particulier" ? "border-architectural-blue bg-blue-50/50" : "border-gray-100 hover:border-blue-100"}`}
                                                        >
                                                            <User className={field.value === "particulier" ? "text-architectural-blue" : "text-gray-400"} size={32} />
                                                            <span className={`font-semibold ${field.value === "particulier" ? "text-architectural-blue" : "text-gray-500"}`}>Particulier</span>
                                                        </div>
                                                        <div
                                                            onClick={() => field.onChange("professionnel")}
                                                            className={`cursor-pointer px-6 py-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all w-40 ${field.value === "professionnel" ? "border-architectural-blue bg-blue-50/50" : "border-gray-100 hover:border-blue-100"}`}
                                                        >
                                                            <Building2 className={field.value === "professionnel" ? "text-architectural-blue" : "text-gray-400"} size={32} />
                                                            <span className={`font-semibold ${field.value === "professionnel" ? "text-architectural-blue" : "text-gray-500"}`}>Professionnel</span>
                                                        </div>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="firstName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Prénom *</FormLabel>
                                                    <FormControl><Input placeholder="Votre prénom" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="lastName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nom *</FormLabel>
                                                    <FormControl><Input placeholder="Votre nom" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        {isPro && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <FormField control={form.control} name="companyName" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Société / Enseigne</FormLabel>
                                                        <FormControl><Input placeholder="Nom de l'entreprise" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="siret" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>SIRET (Optionnel)</FormLabel>
                                                        <FormControl><Input placeholder="000 000 000 00000" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email *</FormLabel>
                                                    <FormControl><Input placeholder="email@exemple.com" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Téléphone *</FormLabel>
                                                    <FormControl><Input placeholder="06 00 00 00 00" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 2: PROJECT INFO */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold mb-2">Votre Projet</h3>
                                            <p className="text-muted-foreground">{isPro ? "Spécificités techniques et contraintes." : "Parlez-nous de votre futur espace."}</p>
                                        </div>

                                        {/* Address Section */}
                                        <div className="space-y-4">
                                            <FormField control={form.control} name="address" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Adresse du chantier *</FormLabel>
                                                    <FormControl><Input placeholder="Ex: 10 Rue Jean Jaurès" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField control={form.control} name="postalCode" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Code Postal *</FormLabel>
                                                        <FormControl><Input placeholder="94400" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="city" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Ville *</FormLabel>
                                                        <FormControl><Input placeholder="Vitry-sur-Seine" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>

                                        <div className="h-px bg-gray-100 my-4" />

                                        {/* Common Type Selection */}
                                        <FormField control={form.control} name="projectType" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Type de projet *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Sélectionnez..." />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="renovation">Rénovation</SelectItem>
                                                        <SelectItem value="neuf">Construction Neuve</SelectItem>
                                                        <SelectItem value="amenagement">Aménagement Intérieur</SelectItem>
                                                        <SelectItem value="depannage">Dépannage</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        {/* Conditional Fields: Particulier */}
                                        {!isPro && (
                                            <div className="p-4 bg-secondary/10 rounded-lg space-y-4 border border-secondary/20">
                                                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Détails Logement</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Type de bien</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl><SelectTrigger><SelectValue placeholder="..." /></SelectTrigger></FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="appartement">Appartement</SelectItem>
                                                                    <SelectItem value="maison">Maison</SelectItem>
                                                                    <SelectItem value="local">Autre</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="surface" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Surface approx. (m²)</FormLabel>
                                                            <FormControl><Input type="number" placeholder="50" {...field} /></FormControl>
                                                        </FormItem>
                                                    )} />
                                                </div>
                                                <FormField control={form.control} name="occupied" render={({ field }) => (
                                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 bg-white">
                                                        <div className="space-y-0.5">
                                                            <FormLabel>Logement occupé pendant les travaux ?</FormLabel>
                                                        </div>
                                                        <FormControl>
                                                            <Switch
                                                                checked={field.value === "oui"}
                                                                onCheckedChange={(checked) => field.onChange(checked ? "oui" : "non")}
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="accessConstraints" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Accès & Contraintes</FormLabel>
                                                        <FormControl><Input placeholder="Étage, ascenseur, stationnement, horaires copro..." {...field} /></FormControl>
                                                    </FormItem>
                                                )} />
                                            </div>
                                        )}

                                        {/* Conditional Fields: Pro */}
                                        {isPro && (
                                            <div className="p-4 bg-blue-50/50 rounded-lg space-y-4 border border-blue-100">
                                                <h4 className="font-semibold text-sm uppercase tracking-wide text-architectural-blue">Spécificités Pro</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <FormField control={form.control} name="siteType" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Type de local</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl><SelectTrigger><SelectValue placeholder="..." /></SelectTrigger></FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="bureau">Bureau</SelectItem>
                                                                    <SelectItem value="commerce">Commerce</SelectItem>
                                                                    <SelectItem value="restaurant">Restaurant</SelectItem>
                                                                    <SelectItem value="entrepot">Entrepôt</SelectItem>
                                                                    <SelectItem value="copro">Copropriété</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="surface" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Surface / Linéaire (m²)</FormLabel>
                                                            <FormControl><Input type="number" placeholder="150" {...field} /></FormControl>
                                                        </FormItem>
                                                    )} />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <FormField control={form.control} name="deliveryDate" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Date de livraison souhaitée</FormLabel>
                                                            <FormControl><Input type="date" {...field} value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''} /></FormControl>
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="proConstraints" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Contraintes d'exploitation</FormLabel>
                                                            <FormControl><Input placeholder="Travaux nuit/WE, continuité d'activité..." {...field} /></FormControl>
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>
                                        )}

                                    </motion.div>
                                )}

                                {/* STEP 3: TECHNICAL DETAILS */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold mb-2">Détails Techniques</h3>
                                            <p className="text-muted-foreground">Précisez votre besoin pour un chiffrage précis.</p>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="lots"
                                            render={() => (
                                                <FormItem>
                                                    <div className="mb-4">
                                                        <FormLabel className="text-base">Lot(s) concerné(s) *</FormLabel>
                                                        <FormDescription>
                                                            Sélectionnez tous les corps d'état nécessaires.
                                                        </FormDescription>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {LOTS_OPTIONS.map((item) => (
                                                            <FormField
                                                                key={item}
                                                                control={form.control}
                                                                name="lots"
                                                                render={({ field }) => {
                                                                    return (
                                                                        <FormItem
                                                                            key={item}
                                                                            className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 hover:bg-gray-50 transition-colors"
                                                                        >
                                                                            <FormControl>
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="h-4 w-4 mt-1 rounded border-gray-300 text-architectural-blue focus:ring-architectural-blue"
                                                                                    checked={field.value?.includes(item)}
                                                                                    onChange={(e) => {
                                                                                        const checked = e.target.checked;
                                                                                        return checked
                                                                                            ? field.onChange([...field.value, item])
                                                                                            : field.onChange(
                                                                                                field.value?.filter(
                                                                                                    (value) => value !== item
                                                                                                )
                                                                                            );
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="font-normal cursor-pointer w-full">
                                                                                {item}
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    );
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField control={form.control} name="budget" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Budget Estimatif</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl><SelectTrigger><SelectValue placeholder="Sélectionnez..." /></SelectTrigger></FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="under_5k">Moins de 5k€</SelectItem>
                                                            <SelectItem value="5_15k">5k€ - 15k€</SelectItem>
                                                            <SelectItem value="15_30k">15k€ - 30k€</SelectItem>
                                                            <SelectItem value="30_60k">30k€ - 60k€</SelectItem>
                                                            <SelectItem value="plus_60k">Plus de 60k€</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="deadline" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Délai souhaité *</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl><SelectTrigger><SelectValue placeholder="Sélectionnez..." /></SelectTrigger></FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="urgent">Urgent</SelectItem>
                                                            <SelectItem value="1_2_mois">1 - 2 mois</SelectItem>
                                                            <SelectItem value="3_6_mois">3 - 6 mois</SelectItem>
                                                            <SelectItem value="plus_6_mois">+ 6 mois</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={form.control} name="description" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Détails du besoin *</FormLabel>
                                                <div className="bg-yellow-50 p-3 rounded-md mb-2 text-xs text-yellow-800 border border-yellow-100">
                                                    💡 Conseil : Décrivez les travaux pièce par pièce + ce que vous gardez / ce que vous changez.
                                                </div>
                                                <FormControl>
                                                    <Textarea placeholder="Ex: Rénovation cuisine : dépose carrelage, plomberie pour îlot central, peinture murs et plafonds..." className="min-h-[150px]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="space-y-3">
                                            <FormLabel>Pièces jointes (Plans, Photos, Métrés)</FormLabel>
                                            <div className="border-2 border-dashed border-input hover:border-architectural-blue transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-muted-foreground bg-gray-50/50 cursor-pointer group">
                                                <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                                    <Upload className="text-architectural-blue" size={24} />
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">Cliquez pour ajouter des fichiers</p>
                                                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 10Mo)</p>
                                                <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-between pt-6 border-t border-gray-100 mt-8">
                                {step > 1 ? (
                                    <Button type="button" variant="outline" onClick={prevStep} className="gap-2 px-6">
                                        <ChevronLeft size={16} /> Précédent
                                    </Button>
                                ) : (
                                    <div></div>
                                )}

                                {step < MAX_STEPS ? (
                                    <Button type="button" onClick={nextStep} className="ml-auto gap-2 px-8 bg-architectural-blue hover:bg-blue-600 shadow-md shadow-blue-200">
                                        Suivant <ChevronRight size={16} />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="ml-auto gap-2 px-8 bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-200">
                                        Envoyer ma demande <Check size={16} />
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
