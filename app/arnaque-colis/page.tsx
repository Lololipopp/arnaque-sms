import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="SMS arnaque colis : faux messages de livraison">

      <p>
        Les arnaques aux SMS de colis sont de plus en plus fréquentes en France.
        Elles utilisent des messages urgents pour pousser à cliquer sur un lien frauduleux.
      </p>

      <h2>Comment fonctionne une arnaque ?</h2>
      <p>
        Vous recevez un SMS indiquant qu’un colis est bloqué ou en attente de paiement.
        Le lien redirige vers un faux site imitant un transporteur.
      </p>

      <h2>Transporteurs souvent usurpés :</h2>
      <ul>
        <li>- Chronopost</li>
        <li>- DHL</li>
        <li>- UPS</li>
        <li>- Colissimo</li>
      </ul>

      <h2>Comment reconnaître un faux SMS ?</h2>
      <ul>
        <li>- Message urgent ou menaçant</li>
        <li>- Lien suspect</li>
        <li>- Demande de paiement</li>
        <li>- Fautes ou formulation étrange</li>
      </ul>

      <h2>Que faire ?</h2>
      <p>
        Ne cliquez jamais sur les liens. Vérifiez directement sur le site officiel du transporteur.
      </p>

      <h2>Vérifier un message reçu :</h2>

      <hr style={{ marginTop: 40 }} />

      <h2>Pages associées</h2>

      <ul>
        <li><Link href="/arnaque-dhl">Arnaque SMS DHL</Link></li>
        <li><Link href="/arnaque-chronopost">Arnaque SMS Chronopost</Link></li>
        <li><Link href="/colis-bloque">Colis bloqué</Link></li>
        <li><Link href="/paiement-livraison">Paiement livraison</Link></li>
        <li><Link href="/arnaque-livraison-quefaire">Que faire ?</Link></li>
      </ul>

    </PageWrapper>
  );
}