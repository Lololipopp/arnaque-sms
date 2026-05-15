import Link from "next/link";

export default function Page() {
  return (
    <main>

      <h1>SMS arnaque colis : comment reconnaître les faux messages de livraison</h1>

      <p>
        Les arnaques aux SMS de colis sont aujourd’hui très répandues en France.
        Elles consistent à envoyer de faux messages se faisant passer pour des transporteurs afin de voler des informations personnelles ou bancaires.
      </p>

      <h2>Comment fonctionne une arnaque SMS de colis ?</h2>

      <p>
        Vous recevez un SMS indiquant qu’un colis est en attente, bloqué ou nécessite une action urgente.
        Le message contient généralement un lien menant vers un site frauduleux imitant un transporteur officiel.
      </p>

      <h2>Transporteurs les plus souvent usurpés</h2>

      <ul>
        <li>Chronopost</li>
        <li>DHL</li>
        <li>UPS</li>
        <li>Colissimo</li>
      </ul>

      <h2>Signes typiques d’un SMS frauduleux</h2>

      <ul>
        <li>Sentiment d’urgence ou de pression</li>
        <li>Lien externe raccourci ou suspect</li>
        <li>Demande de paiement inattendue</li>
        <li>Formulation approximative ou générique</li>
      </ul>

      <h2>Que faire si vous recevez un SMS suspect ?</h2>

      <p>
        Ne cliquez jamais sur les liens contenus dans le message.
        Vérifiez directement auprès du transporteur via son site officiel ou son application.
      </p>

      <p>
        En cas de doute, vous pouvez analyser le message avec notre outil de détection automatique.
      </p>

      <h2>Analysez un SMS en quelques secondes</h2>

      <p>
        Collez simplement le message dans notre outil pour obtenir un niveau de risque basé sur plusieurs critères :
        liens, mots suspects et signaux de confiance.
      </p>

      <Link href="/">
        🔎 Tester un SMS suspect
      </Link>

      <hr style={{ marginTop: 40 }} />

      <h2>Pages associées</h2>

      <ul>
        <li><Link href="/arnaque-dhl">Arnaque SMS DHL</Link></li>
        <li><Link href="/arnaque-chronopost">Arnaque SMS Chronopost</Link></li>
        <li><Link href="/colis-bloque">Colis bloqué : arnaque ou vrai ?</Link></li>
        <li><Link href="/paiement-livraison">Paiement livraison suspect</Link></li>
        <li><Link href="/arnaque-livraison-quefaire">Que faire en cas de SMS suspect</Link></li>
      </ul>

    </main>
  );
}