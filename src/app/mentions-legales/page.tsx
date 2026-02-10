import LegalPageLayout from "@/components/layout/LegalPageLayout";
import Link from "next/link";

export default function MentionsLegales() {
    return (
        <LegalPageLayout title="Mentions Légales">
            <h2>1. Éditeur du site</h2>
            <p>
                Le site <strong>SARL MARTINA</strong> est édité par la société <strong>SARL MARTINA</strong>.<br />
                <strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)<br />
                <strong>Capital social :</strong> 10 000 €<br />
                <strong>RCS :</strong> Créteil 915 060 404<br />
                <strong>Siège social :</strong> [VOTRE ADRESSE COMPLÈTE À INSÉRER ICI]<br />
                <strong>Téléphone :</strong> 07 86 85 32 45<br />
                <strong>Email :</strong> sarlmartina.tce@gmail.com
            </p>

            <h2>2. Directeur de la publication</h2>
            <p>
                Le directeur de la publication est le gérant de la société SARL MARTINA.
            </p>

            <h2>3. Hébergement</h2>
            <p>
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <Link href="/politique-de-confidentialite">Politique de Confidentialité</Link>.
            </p>
        </LegalPageLayout>
    );
}
