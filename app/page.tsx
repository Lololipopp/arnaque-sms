"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [details, setDetails] = useState("");

  function analyze() {
    const lower = text.toLowerCase();

    let score = 0;
    let reasons = [];

    const keywords = [
      "colis",
      "dhl",
      "chronopost",
      "mondial relay",
      "ups",
      "clique",
      "urgent",
      "paiement",
      "retard",
      "adresse"
    ];

    keywords.forEach((word) => {
      if (lower.includes(word)) {
        score += 1;
        reasons.push(`Mot suspect détecté : ${word}`);
      }
    });

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex);

    if (urls) {
      score += urls.length * 2;
      reasons.push("Lien détecté dans le message");

      urls.forEach((url) => {
        if (
          url.includes("bit.ly") ||
          url.includes("tinyurl") ||
          url.includes("t.co")
        ) {
          score += 2;
          reasons.push("Lien raccourci détecté");
        }

        if (url.includes("-") && url.includes("colis")) {
          score += 2;
          reasons.push("Domaine potentiellement frauduleux");
        }
      });
    }

    if (score >= 5) {
      setResult("🚨 Risque élevé");
    } else if (score >= 2) {
      setResult("⚠️ Risque possible");
    } else {
      setResult("✅ Faible risque");
    }

    setDetails(reasons.join(" • "));
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f4f4f4", padding: 40, fontFamily: "Arial" }}>

      {/* 🔥 SEO BLOCK (IMPORTANT) */}
      <section style={{ maxWidth: 900, margin: "0 auto 40px auto" }}>
        <h1>Détecteur d’arnaques SMS colis (DHL, Chronopost, UPS)</h1>

        <p>
          Analysez gratuitement un SMS, email ou lien suspect pour détecter les arnaques liées aux livraisons de colis.
          Ce service aide à identifier les faux messages utilisés par les escrocs.
        </p>

        <p>
          Arnaques fréquentes : 
          <strong> DHL </strong>, 
          <strong> Chronopost </strong>, 
          <strong> Colissimo </strong>, 
          <strong> UPS </strong>.
        </p>

        <h2>Guides associés</h2>

        <ul>
          <li><Link href="/arnaque-dhl">Arnaque SMS DHL</Link></li>
          <li><Link href="/arnaque-chronopost">Arnaque SMS Chronopost</Link></li>
          <li><Link href="/arnaque-colis">Arnaques colis</Link></li>
          <li><Link href="/colis-bloque">Colis bloqué : arnaque ou vrai ?</Link></li>
          <li><Link href="/paiement-livraison">Paiement livraison</Link></li>
          <li><Link href="/arnaque-livraison-quefaire">Que faire ?</Link></li>
        </ul>
      </section>

      {/* 🔥 TOOL BLOCK */}
      <div style={{ maxWidth: 700, margin: "0 auto", background: "white", padding: 30, borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>

        <p style={{ marginBottom: 10, color: "#555" }}>
          Collez un SMS, email ou lien douteux.
        </p>

        <textarea
          placeholder="Exemple : Votre colis est bloqué..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", height: 180, padding: 15, borderRadius: 10, border: "1px solid #ccc", fontSize: 16 }}
        />

        <button
          onClick={analyze}
          style={{ marginTop: 20, padding: "14px 20px", borderRadius: 10, border: "none", background: "black", color: "white", cursor: "pointer", fontSize: 16 }}
        >
          Analyser maintenant
        </button>

        {result && (
          <div style={{ marginTop: 30, padding: 20, borderRadius: 10, background: "#fafafa", border: "1px solid #ddd" }}>
            <h2>{result}</h2>
            <p style={{ marginTop: 10, color: "#444" }}>{details}</p>
          </div>
        )}

      </div>

    </main>
  );
}