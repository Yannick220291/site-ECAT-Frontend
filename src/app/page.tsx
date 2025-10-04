import React from "react";
import Header from "./components/Header";           // Header (logo + boutons)
import HeaderContenu from "./components/HeaderContenu"; // Contenu de la page d'accueil

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header en haut */}
      <Header />

      {/* Contenu principal */}
      <HeaderContenu />
    </main>
  );
}
