export const metadata = {
  title: "SMS colis bloqué arnaque : comment savoir si c’est un faux message",
  description:
    "Votre SMS indique un colis bloqué ? Découvrez comment reconnaître une arnaque de livraison et éviter les liens frauduleux.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="SMS colis bloqué : arnaque ou vrai message ?">

      <main>

        <p>
          De nombreux SMS indiquent qu’un colis est bloqué et demandent une action urgente.
          Dans la majorité des cas, il s’agit d’une tentative d’arnaque.
        </p>

        <h2>Comment fonctionne cette arnaque ?</h2>
        <p>
          Le message vous informe qu’un colis est bloqué en douane ou en attente de paiement.
          Un lien est fourni pour “débloquer” la situation.
        </p>

        <h2>Signes d’une arnaque :</h2>
        <ul>
          <li>- Message urgent</li>
          <li>- Lien suspect</li>
          <li>- Demande de paiement</li>
        </ul>

        <h2>Que faire ?</h2>
        <p>
          Ne cliquez jamais sur le lien. Vérifiez directement sur le site du transporteur.
        </p>

      </main>

    </PageWrapper>
  );
}