export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 800 }}>
      <h1>Arnaques aux faux SMS de colis</h1>

      <p>
        Les arnaques aux colis sont de plus en plus fréquentes en France.
        Les escrocs envoient des SMS ou emails en se faisant passer pour des services de livraison.
      </p>

      <h2>Comment ça marche ?</h2>
      <p>
        Vous recevez un message indiquant qu’un colis est bloqué ou en attente de paiement.
        On vous demande de cliquer sur un lien.
      </p>

      <h2>Exemples de services utilisés</h2>
      <ul>
        <li>Chronopost</li>
        <li>DHL</li>
        <li>UPS</li>
        <li>Colis privé</li>
      </ul>

      <h2>Que faire ?</h2>
      <p>
        Ne cliquez jamais sur les liens suspects. Vérifiez directement sur le site officiel du transporteur.
      </p>

      <h2>Vérifiez un message ici</h2>
      <a href="/" style={{ color: "blue" }}>
        Tester un SMS suspect
      </a>
    </main>
  );
}