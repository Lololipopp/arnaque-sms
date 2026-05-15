export const metadata = {
  title: "SMS paiement livraison arnaque : faut-il vraiment payer ?",
  description:
    "SMS demandant un paiement pour livraison de colis ? Découvrez si c’est une arnaque et comment réagir.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="SMS de paiement pour livraison : arnaque ou vrai ?">

      <main>

        <p>
          Certains SMS demandent de payer quelques euros pour recevoir un colis.
          Il s’agit très souvent d’une arnaque.
        </p>

        <h2>Comment fonctionne cette arnaque ?</h2>
        <p>
          Les escrocs réclament un petit montant (1€ à 5€) pour “frais de livraison” ou “douane”.
        </p>

        <h2>Signes d’alerte :</h2>
        <ul>
          <li>- Petit paiement demandé</li>
          <li>- Lien de paiement externe</li>
          <li>- Urgence ou blocage colis</li>
        </ul>

        <h2>Important :</h2>
        <p>
          Les transporteurs ne demandent pas de paiement via SMS.
        </p>

      </main>

    </PageWrapper>
  );
}