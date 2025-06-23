import React from "react";
import "./RulesMain.css";

export default function RulesMain() {
  return (
    <div className="rules-container">
      <h1>Regulament intern</h1>
      <br></br>
      <div className="rules-content">
        <h2>Acces, conduită și responsabilități</h2>
        <p>
          Accesul la platforma HomeDeal este permis exclusiv agenților
          autorizați. Fiecare agent este responsabil pentru păstrarea
          confidențialității datelor de autentificare, fiind interzisă
          transmiterea acestora către alte persoane.
        </p>
        <p>
          Agenții sunt obligați să respecte normele de conduită stabilite de
          agenție. Comunicarea cu clienții, colegii și echipa de suport trebuie
          să fie profesionistă, promptă și orientată spre soluționarea eficientă
          a cererilor. Abaterile de la aceste norme pot duce la sancțiuni
          disciplinare sau încetarea colaborării.
        </p>
        <p>
          Publicarea anunțurilor trebuie să respecte realitatea: descrierile
          trebuie să fie clare și obiective, fără exagerări. Se acceptă doar
          fotografii proprii sau furnizate de agenție. Agenții sunt direct
          responsabili pentru corectitudinea informațiilor afișate.
        </p>

        <h2>Gestiunea ofertelor și a datelor clienților</h2>
        <p>
          Este responsabilitatea fiecărui agent să mențină actualizate ofertele
          din platformă: prețul, disponibilitatea și alte informații relevante
          trebuie revizuite constant. Anunțurile învechite sau incorecte pot fi
          eliminate automat, iar agentul notificat.
        </p>
        <p>
          Datele clienților obținute prin platformă sau din interacțiuni directe
          trebuie tratate cu maximă confidențialitate. Este interzisă utilizarea
          acestor date în scopuri externe activității agenției HomeDeal.
        </p>

        <h2>Actualizări, modificări și contact intern</h2>
        <p>
          Regulamentul intern poate fi modificat de conducerea agenției ori de
          câte ori este necesar. Modificările vor fi comunicate în prealabil și
          vor intra în vigoare din momentul publicării. Neconformarea poate
          atrage consecințe administrative.
        </p>
        <p>
          Pentru întrebări legate de regulament sau alte aspecte administrative,
          echipa de coordonare poate fi contactată la adresa:{" "}
          <strong>intern@homedeal.ro</strong>.
        </p>
      </div>
    </div>
  );
}
