import React from "react";
import "./MainFAQ.css";

export default function MainFAQ() {
  return (
    <div className="FAQ">
      <div className="title">
        <h1>Întrebări Frecvente </h1>
      </div>

      <div className="content">
        <h2>Ce este politica de confidențialitate?</h2>
        <p>
          Politica de confidențialitate descrie modul în care colectăm, utilizăm
          și protejăm datele dumneavoastră personale atunci când utilizați
          site-ul nostru.
        </p>
        <h2>Cum pot contacta agenții imobiliari?</h2>
        <p>
          Puteți contacta agenții imobiliari prin formularul de contact de pe
          site-ul nostru sau direct prin intermediul anunțurilor postate pe
          platformă.
        </p>
        <h2>Ce este termenul de intermediere imobiliară?</h2>
        <p>
          Intermedierea imobiliară se referă la procesul prin care agenția ajută
          clienții să cumpere, să vândă sau să închirieze proprietăți,
          interacționând între vânzători și cumpărători.
        </p>
        <h2>Cum pot adăuga un anunț pe site?</h2>
        <p>
          Pentru a adăuga un anunț, trebuie să aveți un cont de agent imobiliar
          pe site. După autentificare, veți avea opțiunea de a adăuga un anunț
          în secțiunea dedicată.
        </p>
        <h2>Cum pot programa o vizionare pentru o proprietate?</h2>
        <p>
          Vizionările pot fi programate direct de pe pagina proprietății,
          folosind butonul „Programează o vizionare”. După completarea
          formularului, vei fi contactat de un agent pentru confirmare.{" "}
        </p>

        <h2>Sunt proprietățile verificate înainte de publicare?</h2>
        <p>
          Da, toate anunțurile sunt verificate de echipa noastră înainte de
          publicare, pentru a asigura corectitudinea informațiilor și
          conformitatea cu legislația în vigoare.
        </p>
      </div>
    </div>
  );
}
