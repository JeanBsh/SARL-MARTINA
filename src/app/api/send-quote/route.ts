import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { formSchema } from '@/lib/schemas';
import { quoteLimiter } from '@/lib/rate-limit';

function escapeHtml(str: unknown): string {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
    const { success } = quoteLimiter.check(5, ip);

    if (!success) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans quelques minutes." },
        { status: 429 }
      );
    }

    // Server-side validation with Zod
    const body = await req.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      firstName, lastName, email, phone,
      clientType, companyName, siret,
      address, postalCode, city,
      projectType, propertyType, surface,
      description, budget, deadline,
      lots,
      siteType, deliveryDate, proConstraints, accessConstraints, occupied
    } = result.data;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Configuration manquante (API Key). Veuillez contacter l'administrateur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Escape all user inputs before HTML insertion
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      clientType: escapeHtml(clientType),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      companyName: escapeHtml(companyName),
      siret: escapeHtml(siret),
      address: escapeHtml(address),
      postalCode: escapeHtml(postalCode),
      city: escapeHtml(city),
      projectType: escapeHtml(projectType),
      propertyType: escapeHtml(propertyType),
      siteType: escapeHtml(siteType),
      surface: escapeHtml(surface),
      occupied: escapeHtml(occupied),
      accessConstraints: escapeHtml(accessConstraints),
      proConstraints: escapeHtml(proConstraints),
      deadline: escapeHtml(deadline),
      deliveryDate: escapeHtml(deliveryDate),
      budget: escapeHtml(budget),
      description: escapeHtml(description),
      lots: lots?.map((l: string) => escapeHtml(l)) || [],
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .section { margin-bottom: 25px; background: #f9fafb; padding: 15px; border-radius: 5px; border: 1px solid #e5e7eb; }
          .section h3 { margin-top: 0; color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; color: #666; }
          .value { color: #000; }
          .footer { text-align: center; font-size: 12px; color: #999; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouvelle Demande de Devis</h1>
            <p>Reçue via le site web SARL MARTINA</p>
          </div>

          <div class="section">
            <h3>Informations Client</h3>
            <div class="field"><span class="label">Nom complet:</span> <span class="value">${safe.firstName} ${safe.lastName}</span></div>
            <div class="field"><span class="label">Type:</span> <span class="value">${safe.clientType}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value">${safe.email}</span></div>
            <div class="field"><span class="label">Téléphone:</span> <span class="value">${safe.phone}</span></div>
            ${safe.companyName ? `<div class="field"><span class="label">Société:</span> <span class="value">${safe.companyName}</span></div>` : ''}
            ${safe.siret ? `<div class="field"><span class="label">SIRET:</span> <span class="value">${safe.siret}</span></div>` : ''}
          </div>

          <div class="section">
            <h3>Lieu des Travaux</h3>
            <div class="field"><span class="label">Adresse:</span> <span class="value">${safe.address}</span></div>
            <div class="field"><span class="label">Code Postal / Ville:</span> <span class="value">${safe.postalCode} ${safe.city}</span></div>
          </div>

          <div class="section">
            <h3>Détails du Projet</h3>
            <div class="field"><span class="label">Type de projet:</span> <span class="value">${safe.projectType}</span></div>
            ${safe.propertyType ? `<div class="field"><span class="label">Type de bien:</span> <span class="value">${safe.propertyType}</span></div>` : ''}
            ${safe.siteType ? `<div class="field"><span class="label">Type de local:</span> <span class="value">${safe.siteType}</span></div>` : ''}
            ${safe.surface ? `<div class="field"><span class="label">Surface:</span> <span class="value">${safe.surface} m²</span></div>` : ''}
            ${safe.occupied ? `<div class="field"><span class="label">Occupé:</span> <span class="value">${safe.occupied}</span></div>` : ''}
            ${safe.accessConstraints ? `<div class="field"><span class="label">Contraintes Accès:</span> <span class="value">${safe.accessConstraints}</span></div>` : ''}
            ${safe.proConstraints ? `<div class="field"><span class="label">Contraintes Pro:</span> <span class="value">${safe.proConstraints}</span></div>` : ''}
            <div class="field"><span class="label">Délai souhaité:</span> <span class="value">${safe.deadline}</span></div>
            ${safe.deliveryDate ? `<div class="field"><span class="label">Date de livraison cible:</span> <span class="value">${safe.deliveryDate}</span></div>` : ''}
            <div class="field"><span class="label">Budget estimatif:</span> <span class="value">${safe.budget}</span></div>
          </div>

          <div class="section">
             <h3>Lots Concernés</h3>
             <div class="value">${safe.lots.length > 0 ? safe.lots.join(', ') : 'Aucun lot spécifié'}</div>
          </div>

          <div class="section">
            <h3>Description</h3>
            <div class="value" style="white-space: pre-wrap;">${safe.description}</div>
          </div>

          <div class="footer">
            <p>Cet email a été envoyé automatiquement depuis votre formulaire de contact.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'SARL MARTINA Web <contact@sarlmartina.fr>',
      to: [process.env.RESEND_TO_EMAIL || 'delivered@resend.dev'],
      subject: `Nouveau devis : ${safe.firstName} ${safe.lastName} - ${safe.city}`,
      html: htmlContent,
      replyTo: email,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json({
        error: "Erreur lors de l'envoi de l'email",
        details: data.error.message || data.error.name
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue" },
      { status: 500 }
    );
  }
}
