import React from "react";

export default function RulesMain() {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Regulament Intern – Agenți Imobiliari
      </h2>

      <section>
        <h4>Art. 1 – Scopul paginii</h4>
        <p>
          Pagina de agenți are rolul de a afișa informațiile relevante despre
          fiecare agent imobiliar colaborator: datele de contact, experiența,
          zona de activitate, precum și proprietățile gestionate.
        </p>
      </section>

      <section>
        <h4>Art. 2 – Reguli generale de utilizare</h4>
        <ul>
          <li>
            Accesul la pagină este permis exclusiv agenților autorizați,
            înregistrați în sistem.
          </li>
          <li>
            Fiecare agent este responsabil pentru corectitudinea informațiilor
            afișate în profilul său.
          </li>
          <li>
            Este interzisă publicarea de conținut vulgar, ofensator sau dăunător
            imaginii companiei.
          </li>
          <li>
            Fotografiile încărcate trebuie să fie conforme cu standardele
            platformei.
          </li>
        </ul>
      </section>

      <section>
        <h4>Art. 3 – Comportamentul profesional</h4>
        <ul>
          <li>
            Agenții trebuie să trateze clienții cu respect și profesionalism.
          </li>
          <li>
            Comunicarea cu clienții se face doar prin canale oficiale aprobate.
          </li>
          <li>Toate interacțiunile trebuie înregistrate în platformă.</li>
        </ul>
      </section>

      <section>
        <h4>Art. 4 – Actualizarea datelor</h4>
        <ul>
          <li>
            Agenții sunt obligați să își mențină profilul și proprietățile
            actualizate.
          </li>
          <li>
            Modificările importante (ex. statutul de colaborator) trebuie
            comunicate în 48h.
          </li>
        </ul>
      </section>

      <section>
        <h4>Art. 5 – Confidențialitate</h4>
        <ul>
          <li>
            Datele clienților sunt confidențiale și nu pot fi folosite în
            scopuri personale.
          </li>
          <li>
            Accesarea neautorizată a datelor constituie abatere disciplinară
            gravă.
          </li>
        </ul>
      </section>

      <section>
        <h4>Art. 6 – Sancțiuni</h4>
        <p>
          Încălcarea regulamentului poate duce la: avertisment, suspendarea
          contului, ștergerea contului, acțiuni legale.
        </p>
      </section>

      <section>
        <h4>Art. 7 – Acceptare</h4>
        <p>
          Prin utilizarea contului de agent, se consideră că regulamentul a fost
          citit, înțeles și acceptat.
        </p>
      </section>
    </div>
  );
}
