export const metadata = {
  title: "SMS DHL arnaque : comment reconnaître un faux message de colis",
  description:
    "Analyse des faux SMS DHL liés aux livraisons de colis. Apprends à repérer les signes d’arnaque et à éviter les liens frauduleux.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="Faux SMS DHL : attention aux arnaques">

      <main>

        <p>
          Les escrocs utilisent DHL pour tromper les utilisateurs avec de faux messages de livraison de colis.
        </p>

        <h2>Exemple de faux SMS DHL</h2>
        <p>
          “Votre colis DHL est bloqué, cliquez ici pour le débloquer.”
        </p>

        <h2>Signes d’une arnaque DHL</h2>
        <ul>
          <li>- Lien non officiel</li>
          <li>- Message urgent ou menaçant</li>
          <li>- Demande de données personnelles ou paiement</li>
        </ul>

        <h2>Comment réagir ?</h2>
        <p>
          Vérifiez toujours directement sur le site officiel de DHL avant toute action.
        </p>

        <Link href="/">
          🔎 Tester un SMS suspect
        </Link>
      </main>

    </PageWrapper>
  );
}