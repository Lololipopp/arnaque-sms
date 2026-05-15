export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 800 }}>
      <h1>Faux SMS Chronopost : comment les reconnaître ?</h1>

      <p>
        Les faux SMS Chronopost sont une arnaque très courante en France.
      </p>

      <h2>Exemple de message frauduleux</h2>
      <p>
        “Votre colis est en attente. Paiement requis : cliquez ici”
      </p>

      <h2>Signes d’arnaque</h2>
      <ul>
        <li>Lien étrange</li>
        <li>Urgence excessive</li>
        <li>Demande de paiement</li>
      </ul>

      <h2>Important</h2>
      <p>
        Chronopost ne demande jamais de paiement par SMS.
      </p>

      <a href="/" style={{ color: "blue" }}>
        Vérifier un SMS
      </a>
    </main>
  );
}