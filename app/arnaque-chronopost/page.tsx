export const metadata = {
  title: "Faux SMS Chronopost : arnaques et comment les éviter",
  description:
    "Apprenez à reconnaître les faux SMS Chronopost et évitez les tentatives de phishing liées aux colis.",
};
import PageWrapper from "@/components/PageWrapper";

export default function Page() {
  return (
    <PageWrapper title="Faux SMS Chronopost : comment les reconnaître ?">
      <p>
        Les faux SMS Chronopost sont très fréquents en France et visent à voler vos données ou vos paiements.
      </p>

      <h2>Exemple d’arnaque</h2>
      <p>
        “Votre colis est en attente. Paiement de 2,99€ requis pour livraison.”
      </p>

      <h2>Signes d’alerte</h2>
      <ul>
        <li>Lien étrange</li>
        <li>Urgence artificielle</li>
        <li>Demande de paiement</li>
      </ul>

      <h2>Important</h2>
      <p>
        Chronopost ne demande jamais de paiement par SMS.
      </p>
    </PageWrapper>
  );
}
<div style={{ marginTop: 30 }}>
  <a href="/" style={{ color: "blue" }}>
    🔎 Tester un SMS suspect ici
  </a>
</div>