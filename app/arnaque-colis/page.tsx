export const metadata = {
  title: "SMS arnaque colis : comment reconnaître un faux message de livraison",
  description:
    "Analyse des faux SMS de livraison de colis (Chronopost, DHL, UPS, Colissimo). Apprends à détecter les arnaques et à éviter les liens frauduleux.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="SMS arnaque colis : faux messages de livraison">

      <main>
        <h1>SMS arnaque colis : comment reconnaître un faux message de livraison</h1>

        <p>
          Les arnaques aux colis sont de plus en plus fréquentes en France.
          Les escrocs envoient des SMS ou emails en se faisant passer pour des services de livraison afin de voler vos informations bancaires.
        </p>

        <h2>Comment fonctionne une arnaque par SMS de colis ?</h2>
        <p>
          Vous recevez un message indiquant qu’un colis est bloqué, en attente de paiement ou qu’une action urgente est requise.
          Le lien redirige vers un faux site imitant un transporteur.
        </p>

        <h2>Transporteurs les plus souvent usurpés</h2>
        <ul>
          <li>Chronopost</li>
          <li>DHL</li>
          <li>UPS</li>
          <li>Colissimo</li>
        </ul>

        <h2>Comment reconnaître un faux SMS de colis ?</h2>
        <ul>
          <li>Message urgent ou menaçant</li>
          <li>Lien suspect ou raccourci</li>
          <li>Demande de paiement inattendue</li>
          <li>Fautes ou formulation étrange</li>
        </ul>

        <h2>Que faire si vous recevez un SMS suspect ?</h2>
        <p>
          Ne cliquez jamais sur le lien. Vérifiez directement sur le site officiel du transporteur.
          En cas de doute, supprimez le message.
        </p>

        <h2>Vérifier un SMS suspect</h2>
        <p>
          Vous pouvez analyser un message directement avec notre outil de détection.
        </p>

        <Link href="/">
          🔎 Tester un SMS suspect
        </Link>
      </main>

    </PageWrapper>
  );
}