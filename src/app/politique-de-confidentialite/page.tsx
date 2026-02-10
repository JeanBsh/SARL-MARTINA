import LegalPageLayout from "@/components/layout/LegalPageLayout";

export default function PolitiqueConfidentialite() {
    return (
        <LegalPageLayout
            title="Politique de Confidentialité"
            date={`Dernière mise à jour : ${new Date().toLocaleDateString()}`}
        >
            <h2>1. Introduction</h2>
            <p>
                La société <strong>SARL MARTINA</strong> soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
            </p>

            <h2>2. Collecte des données</h2>
            <p>
                Nous collectons les renseignements suivants via le formulaire de contact et de demande de devis :
            </p>
            <ul>
                <li>Nom et Prénom</li>
                <li>Adresse électronique (Email)</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale du chantier</li>
                <li>Informations relatives à votre projet (budget, description, etc.)</li>
            </ul>
            <p>
                Ces données sont nécessaires pour traiter votre demande, établir un devis et communiquer avec vous dans le cadre de la relation commerciale.
            </p>

            <h2>3. Utilisation des données</h2>
            <p>
                Vos données sont utilisées uniquement dans le but de :
            </p>
            <ul>
                <li>Répondre à vos demandes de contact et de devis.</li>
                <li>Exécuter les prestations de services demandées.</li>
                <li>Améliorer notre service client.</li>
            </ul>
            <p>
                Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers sans votre consentement, sauf ce qui est nécessaire pour répondre à une demande et/ou transaction (par exemple, un sous-traitant partenaire pour une partie des travaux, avec votre accord).
            </p>

            <h2>4. Sécurité des données</h2>
            <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
            </p>

            <h2>5. Vos droits</h2>
            <p>
                Conformément à la réglementation en vigueur (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition au traitement de vos données personnelles. Vous pouvez exercer ces droits en nous contactant par email à : <strong>sarlmartina.tce@gmail.com</strong>
            </p>

            <h2>6. Cookies</h2>
            <p>
                Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur, mesurer l'audience ou proposer des fonctionnalités sociales. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur ou via notre bandeau de consentement.
            </p>

            <h2>7. Contact</h2>
            <p>
                Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante : <strong>sarlmartina.tce@gmail.com</strong>.
            </p>
        </LegalPageLayout>
    );
}
