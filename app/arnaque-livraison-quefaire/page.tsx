export const metadata = {
  title: "SMS livraison arnaque : que faire si vous recevez un message suspect ?",
  description:
    "Vous avez reçu un SMS suspect de livraison ? Découvrez les bons réflexes pour éviter une arnaque.",
};

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Page() {
  return (
    <PageWrapper title="SMS livraison arnaque : que faire ?">

      <main>

        <p>
          Si vous recevez un SMS suspect concernant une livraison, il est important de réagir rapidement pour éviter une arnaque.
        </p>

        <h2>Ne cliquez pas sur le lien</h2>
        <p>
          La première règle est de ne jamais ouvrir les liens contenus dans ces messages.
        </p>

        <h2>Vérifiez directement :</h2>
        <ul>
          <li>- Site officiel du transporteur</li>
          <li>- Application officielle</li>
          <li>- Service client</li>
        </ul>

        <h2>Si vous avez cliqué</h2>
        <p>
          Changez vos mots de passe et surveillez vos comptes bancaires.
        </p>

      </main>

    </PageWrapper>
  );
}