import React from "react";
import "./RulesMain.css";

export default function RulesMain() {
  return (
    <div className="Rules">
      <div className="title">
        <h1>Regulament intern</h1>
      </div>
      <div className="content">
        <h2>Scopul acestui regulament</h2>
        <p>
          Această pagină stabilește normele de conduită și responsabilitățile
          agenților în cadrul agenției HomeDeal. Respectarea acestor reguli este
          obligatorie pentru toți agenții activi și colaboratorii care
          desfășoară activități în numele agenției.
        </p>

        <h2>Accesul la platformă</h2>
        <p>
          Accesul la platforma HomeDeal este permis exclusiv agenților
          autorizați. Fiecare agent este responsabil pentru păstrarea
          confidențialității datelor de autentificare. Este interzisă
          transmiterea credentialelor către alte persoane, indiferent de motiv.
        </p>

        <h2>Publicarea anunțurilor</h2>
        <p>
          Toate anunțurile publicate pe platformă trebuie să fie conforme cu
          realitatea și să respecte standardele agenției în ceea ce privește
          conținutul și calitatea. Este obligatorie utilizarea fotografiilor
          proprii sau a celor furnizate de agenție, iar descrierile trebuie să
          fie clare, obiective și fără exagerări.
        </p>

        <h2>Responsabilitatea agenților</h2>
        <p>
          Agenții HomeDeal sunt direct responsabili pentru corectitudinea
          informațiilor publicate în anunțuri, pentru interacțiunile cu clienții
          și pentru respectarea normelor legale și etice. Orice abatere poate
          atrage sancțiuni disciplinare sau încetarea colaborării.
        </p>

        <h2>Utilizarea datelor clienților</h2>
        <p>
          Datele clienților colectate prin intermediul platformei sau în cadrul
          interacțiunilor directe trebuie tratate cu confidențialitate maximă.
          Este interzisă utilizarea acestora în afara scopurilor strict legate
          de activitatea HomeDeal
        </p>

        <h2>Comunicarea internă</h2>
        <p>
          Agenții sunt obligați să răspundă prompt și profesionist la
          solicitările primite din partea echipei de suport, a managerilor sau a
          altor colegi. Comunicarea trebuie să fie clară, respectuoasă și
          orientată spre rezolvarea eficientă a problemelor.
        </p>

        <h2>Actualizarea ofertelor</h2>
        <p>
          Este responsabilitatea fiecărui agent să actualizeze constant statusul
          proprietăților gestionate (disponibilitate, preț, modificări
          relevante). Ofertele învechite sau incorecte vor fi eliminate de pe
          platformă, iar agentul poate fi avertizat.
        </p>

        <h2>Modificări ale regulamentului</h2>
        <p>
          Regulamentul intern poate fi modificat de conducerea agenției ori de
          câte ori este necesar. Orice modificare va fi comunicată în prealabil
          și va intra în vigoare din momentul publicării. Neconformarea poate
          atrage consecințe administrative.
        </p>

        <h2>Contact intern</h2>
        <p>
          Pentru întrebări legate de regulament sau de activitatea pe platformă,
          vă rugăm să contactați echipa de coordonare la adresa:{" "}
          <strong>intern@homedeal.ro</strong>.
        </p>
      </div>
    </div>
  );
}
