import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key
// Ideally, this should be in process.env.RESEND_API_KEY
// We will check for the key inside the handler to provide a helpful error if missing.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName, lastName, email, phone,
      clientType, companyName, siret,
      address, postalCode, city,
      projectType, propertyType, surface,
      description, budget, deadline,
      lots,
      siteType, deliveryDate, proConstraints, accessConstraints, occupied
    } = body;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Configuration manquante (API Key). Veuillez contacter l'administrateur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Create a detailed HTML email
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
            <h3>👤 Informations Client</h3>
            <div class="field"><span class="label">Nom complet:</span> <span class="value">${firstName} ${lastName}</span></div>
            <div class="field"><span class="label">Type:</span> <span class="value">${clientType}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value">${email}</span></div>
            <div class="field"><span class="label">Téléphone:</span> <span class="value">${phone}</span></div>
            ${companyName ? `<div class="field"><span class="label">Société:</span> <span class="value">${companyName}</span></div>` : ''}
            ${siret ? `<div class="field"><span class="label">SIRET:</span> <span class="value">${siret}</span></div>` : ''}
          </div>

          <div class="section">
            <h3>📍 Lieu des Travaux</h3>
            <div class="field"><span class="label">Adresse:</span> <span class="value">${address}</span></div>
            <div class="field"><span class="label">Code Postal / Ville:</span> <span class="value">${postalCode} ${city}</span></div>
          </div>

          <div class="section">
            <h3>🏗️ Détails du Projet</h3>
            <div class="field"><span class="label">Type de projet:</span> <span class="value">${projectType}</span></div>
            ${propertyType ? `<div class="field"><span class="label">Type de bien:</span> <span class="value">${propertyType}</span></div>` : ''}
            ${siteType ? `<div class="field"><span class="label">Type de local:</span> <span class="value">${siteType}</span></div>` : ''}
            ${surface ? `<div class="field"><span class="label">Surface:</span> <span class="value">${surface} m²</span></div>` : ''}
            ${occupied ? `<div class="field"><span class="label">Occupé:</span> <span class="value">${occupied}</span></div>` : ''}
            ${accessConstraints ? `<div class="field"><span class="label">Contraintes Accès:</span> <span class="value">${accessConstraints}</span></div>` : ''}
            ${proConstraints ? `<div class="field"><span class="label">Contraintes Pro:</span> <span class="value">${proConstraints}</span></div>` : ''}
            <div class="field"><span class="label">Délai souhaité:</span> <span class="value">${deadline}</span></div>
            ${deliveryDate ? `<div class="field"><span class="label">Date de livraison cible:</span> <span class="value">${deliveryDate}</span></div>` : ''}
            <div class="field"><span class="label">Budget estimatif:</span> <span class="value">${budget}</span></div>
          </div>

          <div class="section">
             <h3>🛠️ Lots Concernés</h3>
             <div class="value">${lots && lots.length > 0 ? lots.join(', ') : 'Aucun lot spécifié'}</div>
          </div>

          <div class="section">
            <h3>📝 Description</h3>
            <div class="value" style="white-space: pre-wrap;">${description}</div>
          </div>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement depuis votre formulaire de contact.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    // IMPORTANT: 'from' must be a domain you verify in Resend, or 'onboarding@resend.dev' for testing
    // For production, the user should change this.
    // We will use onboarding@resend.dev for now as it works immediately for testing (only to the account owner's email).
    const data = await resend.emails.send({
      from: 'SARL MARTINA Web <onboarding@resend.dev>',
      // IMPORTANT: For the free tier, you can ONLY send to the email configuration in your Resend account.
      // We adding RESEND_TO_EMAIL to .env.local to make this configurable.
      to: [process.env.RESEND_TO_EMAIL || 'delivered@resend.dev'],
      subject: `Nouveau devis : ${firstName} ${lastName} - ${city}`,
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
