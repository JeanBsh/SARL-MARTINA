import * as z from "zod";

export const formSchema = z.object({
    // Step 1: Contact
    firstName: z.string().min(2, "Prénom requis"),
    lastName: z.string().min(2, "Nom requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone requis"),
    clientType: z.enum(["particulier", "professionnel"], {
        required_error: "Veuillez sélectionner un type",
    }),

    // Step 2: Project Info
    address: z.string().min(5, "Adresse du chantier requise"),
    postalCode: z.string().min(5, "Code postal requis"),
    city: z.string().min(2, "Ville requise"),
    projectType: z.string({ required_error: "Type de travaux requis" }),
    budget: z.string().optional(),

    // Step 3: Details
    description: z.string().min(10, "Description détaillée requise"),
    // Files handled separately usually or via refined schema
});

export type FormValues = z.infer<typeof formSchema>;
