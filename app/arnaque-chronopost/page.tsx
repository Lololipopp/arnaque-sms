export const metadata = {
  title: "Arnaque Chronopost SMS : comment reconnaître un faux message",
  description:
    "Analyse des SMS Chronopost suspects. Vérifie si ton message est une arnaque ou une vraie livraison.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="Faux SMS Chronopost : comment les reconnaître ?">

      <main>

        <p>
          Les faux SMS Chronopost sont très fréquents en France et visent à voler vos données personnelles ou bancaires.
        </p>

        <h2>Exemple d’arnaque Chronopost :</h2>
        <p>
          “Votre colis est en attente. Paiement de 2,99€ requis pour livraison.”
        </p>

        <h2>Signes d’alerte :</h2>
        <ul>
          <li>Lien suspect ou raccourci</li>
          <li>Urgence artificielle</li>
          <li>Demande de paiement inattendue</li>
        </ul>

        <h2>Important</h2>
        <p>
          Chronopost ne demande jamais de paiement par SMS.
        </p>

      </main>

    </PageWrapper>
  );
}