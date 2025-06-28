import React from "react";
import "./GuideMain.css";

const GuideMain = () => {
  return (
    <div className="agent-guide-container">
      <h1>Ghid pentru agenți</h1>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <p>
          Bine ai venit în platforma noastră imobiliară! Acest ghid te va ajuta
          să folosești eficient funcționalitățile sistemului, să gestionezi
          anunțurile și să comunici cu potențialii clienți.
        </p>
      </section>

      <section>
        <h2>Crearea unei proprietăți</h2>
        <ul>
          <li>
            Accesează meniul{" "}
            <a
              href="/incarca-proprietate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Încarcă proprietate</strong>
            </a>
            .
          </li>
          <li>
            Completează formularul: titlu, descriere, tip, zonă, suprafață,
            număr de camere, preț, imagini etc.
          </li>
          <li>
            Alege opțiunea <strong>„Potrivit pentru…”</strong> pentru a
            evidenția publicul țintă.
          </li>
          <li>
            După salvare, proprietatea va apărea în pagina{" "}
            <a
              href="/proprietati-incarcate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Proprietățile mele</strong>
            </a>
            .
          </li>
        </ul>
        <p className="tip">
          🟢 Recomandare: Adaugă o descriere clară pentru a crește
          atractivitatea anunțului.
        </p>
      </section>

      <section>
        <h2>Gestionarea anunțurilor</h2>
        <ul>
          <li>
            Poți edita, șterge sau vizualiza proprietățile din secțiunea{" "}
            <a
              href="/proprietati-incarcate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Proprietățile mele</strong>
            </a>
            .
          </li>
          <li>Fiecare agent are acces doar la proprietățile adăugate de el.</li>
        </ul>
      </section>

      <section>
        <h2>Programări pentru vizionare</h2>
        <ul>
          <li>
            Clienții pot trimite cereri de programare pentru o anumită
            proprietate.
          </li>
          <li>
            Acestea apar în{" "}
            <a href="/vizionari" target="_blank" rel="noopener noreferrer">
              <strong>Programări vizionări</strong>
            </a>
            , cu statusuri:
            <ul>
              <li>
                <strong>În așteptare</strong> – programarea nu a fost procesată
              </li>
              <li>
                <strong>Acceptat</strong> – ai confirmat programarea
              </li>
              <li>
                <strong>Respins</strong> – ai refuzat solicitarea
              </li>
            </ul>
          </li>
        </ul>
        <p className="tip">
          🟢 Notă: Gestionarea rapidă a programărilor crește șansele de vânzare.
        </p>
      </section>

      <section>
        <h2>Sistem de mesagerie</h2>
        <ul>
          <li>Comunică direct cu clienții prin sistemul de chat.</li>
          <li>Accesează iconița de mesaje din colțul din dreapta sus.</li>
          <li>
            Chat-ul se deschide ca pop-up și permite discuții în timp real.
          </li>
          <li>Conversațiile sunt salvate și pot fi revizitate oricând.</li>
        </ul>
      </section>

      <section>
        <h2>Statistici și rapoarte</h2>
        <p>Platforma oferă două secțiuni principale pentru analiză:</p>

        <h3>
          🔹{" "}
          <a href="/rapoartele-mele" target="_blank" rel="noopener noreferrer">
            <strong>Rapoartele mele</strong>
          </a>
        </h3>
        <ul>
          <li>📉Diferențe de preț între listare și vânzare</li>
          <li>🏠 Tipuri de proprietăți vândute</li>
          <li>📆 Programări și tranzacții pe luni</li>
        </ul>

        <h3>
          🔹{" "}
          <a href="/rapoarte-firma" target="_blank" rel="noopener noreferrer">
            <strong>Rapoartele firmei</strong>
          </a>
        </h3>
        <ul>
          <li>🏆Top 3 agenți pe baza vânzărilor</li>
          <li>🎯 Îndeplinirea targetului la nivel de firmă</li>
          <li>📊 Distribuția valorii vânzărilor pe tipuri de proprietăți</li>
        </ul>

        <p className="tip">
          🟢 Recomandare: Consultă ambele secțiuni pentru a înțelege cum te
          poziționezi și cum poți evolua strategic.
        </p>
      </section>

      <section>
        <h2>Recomandări pentru succes</h2>
        <ul>
          <li>Publică anunțuri clare și complete.</li>
          <li>Răspunde rapid la cererile de programare și mesaje.</li>
          <li>Folosește rapoartele pentru a-ți ajusta strategia de vânzări.</li>
        </ul>
      </section>
    </div>
  );
};

export default GuideMain;
