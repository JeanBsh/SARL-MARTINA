import * as z from "zod";

export const formSchema = z.object({
    // Common - Step 1
    clientType: z.enum(["particulier", "professionnel"], { required_error: "Type de client requis" }),
    firstName: z.string().min(2, "Prénom requis"),
    lastName: z.string().min(2, "Nom requis"),
    phone: z.string().min(10, "Téléphone requis"),
    email: z.string().email("Email invalide"),

    // Common - Step 2 (Project Location & Type)
    address: z.string().min(5, "Adresse requise"),
    postalCode: z.string().min(5, "Code postal requis"),
    city: z.string().min(2, "Ville requise"),
    projectType: z.enum(["renovation", "neuf", "amenagement", "depannage"], { required_error: "Type de projet requis" }),

    // Specific - Particulier
    propertyType: z.enum(["appartement", "maison", "local"]).optional(),
    surface: z.string().optional(),
    occupied: z.enum(["oui", "non"]).optional(),
    accessConstraints: z.string().optional(),

    // Specific - Professionnel
    companyName: z.string().optional(),
    contactName: z.string().optional(), // Can often be same as first/last name, but good to have if representative differs
    siret: z.string().optional(),
    siteType: z.enum(["bureau", "commerce", "restaurant", "entrepot", "copro", "autre"]).optional(),
    deliveryDate: z.date().optional(), // Or string
    proConstraints: z.string().optional(),

    // Common - Step 3 (Details)
    lots: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Sélectionnez au moins un lot",
    }),
    description: z.string().min(10, "Description détaillée requise"),
    budget: z.string().optional(),
    deadline: z.enum(["urgent", "1_2_mois", "3_6_mois", "plus_6_mois"], { required_error: "Délai souhaité requis" }),
});

export type FormValues = z.infer<typeof formSchema>;
