import React from "react";
import "./MainAboutUs.css";

const MainAboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Despre HomeDeal</h1>
      <br />
      <section>
        <p>
          HomeDeal este platforma digitală oficială a agenției imobiliare cu
          același nume, concepută pentru a moderniza procesul de interacțiune
          dintre agenți și clienți. Aplicația permite gestionarea completă a
          anunțurilor, programărilor și comunicării, exclusiv pe bază de
          autentificare.
        </p>
      </section>

      <section>
        <h2>Misiunea noastră</h2>
        <p>
          Scopul platformei HomeDeal este de a simplifica și digitaliza întregul
          proces imobiliar, oferind un spațiu de lucru sigur și eficient
          agenților interni și o experiență clară și controlată clienților care
          își creează cont în sistem.
        </p>
      </section>

      <section>
        <h2>Ce oferim</h2>
        <ul>
          <li>
            Acces securizat pentru agenții HomeDeal și clienți autentificați
          </li>
          <li>Creare, editare și administrare de anunțuri imobiliare</li>
          <li>Programarea vizionărilor direct prin platformă</li>
          <li>Comunicare în timp real prin sistemul de mesagerie</li>
          <li>
            Rapoarte personalizate pentru agenți și analiză la nivel de firmă
          </li>
        </ul>
      </section>

      <section>
        <h2>Valorile noastre</h2>
        <ul>
          <li>
            🔒 Securitate în gestionarea datelor și autentificare controlată
          </li>
          <li>📊 Transparență în procesul de vânzare și analiză</li>
          <li>🤝 Profesionalism în interacțiunea agent–client</li>
          <li>🧭 Inovație digitală adaptată pieței imobiliare actuale</li>
        </ul>
      </section>
    </div>
  );
};

export default MainAboutUs;
