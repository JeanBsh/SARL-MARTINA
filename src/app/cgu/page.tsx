import LegalPageLayout from "@/components/layout/LegalPageLayout";
import Link from "next/link";

export default function CGU() {
    return (
        <LegalPageLayout
            title="Conditions Générales d'Utilisation"
            subtitle="(CGU)"
            date={`En vigueur au ${new Date().toLocaleDateString()}`}
        >
            <h2>1. Objet</h2>
            <p>
                Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités de mise à disposition des services du site <strong>SARL MARTINA</strong> et les conditions d'utilisation du Service par l'Utilisateur.
            </p>

            <h2>2. Accès au site</h2>
            <p>
                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
            </p>

            <h2>4. Responsabilité</h2>
            <p>
                Les sources des informations diffusées sur le site <strong>SARL MARTINA</strong> sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                Le site ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
                La collecte et le traitement des données personnelles sont régis par notre <Link href="/politique-de-confidentialite">Politique de Confidentialité</Link>.
            </p>

            <h2>6. Droit applicable</h2>
            <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
            </p>
        </LegalPageLayout>
    );
}
