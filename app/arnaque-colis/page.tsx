import PageWrapper from "@/components/PageWrapper";

export default function Page() {
  return (
    <PageWrapper title="Arnaques aux faux SMS de colis">
      <p>
        Les arnaques aux colis sont de plus en plus fréquentes en France.
        Les escrocs envoient des SMS ou emails en se faisant passer pour des services de livraison.
      </p>

      <h2>Comment ça marche ?</h2>
      <p>
        Vous recevez un message indiquant qu’un colis est bloqué ou en attente de paiement.
      </p>

      <h2>Transporteurs souvent utilisés</h2>
      <ul>
        <li>Chronopost</li>
        <li>DHL</li>
        <li>UPS</li>
        <li>Colissimo</li>
      </ul>

      <h2>Conseil</h2>
      <p>
        Ne cliquez jamais sur un lien suspect. Vérifiez directement sur le site officiel.
      </p>
    </PageWrapper>
  );
}