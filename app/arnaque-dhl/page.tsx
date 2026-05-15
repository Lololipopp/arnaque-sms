export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 800 }}>
      <h1>Faux SMS DHL : attention aux arnaques</h1>

      <p>
        Les arnaques utilisant DHL sont fréquentes et visent à voler vos données bancaires.
      </p>

      <h2>Exemple de faux SMS</h2>
      <p>
        “Votre colis DHL est bloqué. Mise à jour requise immédiatement.”
      </p>

      <h2>Comment reconnaître une arnaque</h2>
      <ul>
        <li>Lien suspect</li>
        <li>Demande urgente</li>
        <li>Orthographe étrange</li>
      </ul>

      <h2>Conseil</h2>
      <p>
        Ne cliquez jamais sur un lien sans vérifier la source officielle.
      </p>

      <a href="/" style={{ color: "blue" }}>
        Tester un SMS
      </a>
    </main>
  );
}