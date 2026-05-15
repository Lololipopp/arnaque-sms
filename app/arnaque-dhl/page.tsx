export const metadata = {
  title: "Arnaque DHL SMS : comment détecter les faux messages",
  description:
    "Guide pour identifier les faux SMS DHL et éviter les arnaques de livraison de colis.",
};
import PageWrapper from "@/components/PageWrapper";

export default function Page() {
  return (
    <PageWrapper title="Faux SMS DHL : attention aux arnaques">
      <p>
        Les escrocs utilisent DHL pour tromper les utilisateurs avec de faux messages de livraison.
      </p>

      <h2>Exemple</h2>
      <p>
        “Votre colis DHL est bloqué, cliquez ici pour le débloquer.”
      </p>

      <h2>Signes</h2>
      <ul>
        <li>Lien non officiel</li>
        <li>Pression urgente</li>
        <li>Demande de données personnelles</li>
      </ul>

      <h2>Conseil</h2>
      <p>
        Vérifiez toujours sur le site officiel DHL.
      </p>
    </PageWrapper>
  );
}
<div style={{ marginTop: 30 }}>
  <a href="/" style={{ color: "blue" }}>
    🔎 Tester un SMS suspect ici
  </a>
</div>