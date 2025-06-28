import React from "react";
import "./MainPrivacyAndPolicy.css";

export default function MainPrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Politica de confidențialitate</h1>

      <section className="privacy-section">
        <p>
          Respectăm dispozițiile legale privitoare la protecția datelor cu
          caracter personal prevăzute în Regulamentul UE nr. 679/2016 și punem
          în aplicare măsuri tehnice și organizatorice care previn prelucrările
          neautorizate sau ilegale, precum și pierderile accidentale. Asigurarea
          dreptului la protecția datelor este un angajament fundamental. Acest
          document are rolul de a vă informa despre modul în care prelucrăm și
          protejăm datele dumneavoastră.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Categoriile de date prelucrate</h2>
        <p>
          În cadrul activităților de intermediere imobiliară, colectăm: nume,
          prenume, adrese, date de contact (email, telefon). În plus, putem
          analiza comportamentul online pentru personalizarea experienței. Nu
          colectăm date sensibile. Minorii sub 16 ani au nevoie de acordul
          părinților.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Scopul prelucrării datelor</h2>
        <ul>
          <li>Prestarea serviciilor de intermediere.</li>
          <li>
            Corelarea cererii cu oferta, cu dezvăluirea adresei doar clienților
            validați.
          </li>
          <li>Folosirea fotografiilor proprietăților în scop publicitar.</li>
          <li>
            Redactarea documentelor sau contractelor necesare tranzacțiilor.
          </li>
          <li>Marketing și informare despre oferte și tendințe.</li>
          <li>
            Apărarea intereselor legitime și respectarea obligațiilor legale.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Durata păstrării datelor</h2>
        <p>
          Datele se păstrează pe durata necesară tranzacțiilor și analizelor de
          piață, după care vor fi șterse sau arhivate conform legii.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Transmiterea datelor</h2>
        <p>
          Informațiile pot fi partajate cu agenți sau alte părți implicate în
          tranzacție, doar în condițiile legale și în scopul intermedierii.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Drepturile dumneavoastră</h2>
        <p>
          Aveți dreptul la acces, rectificare, ștergere, restricționare sau
          opoziție privind prelucrarea datelor, cu excepția cazurilor
          justificate legal.
        </p>
      </section>
    </div>
  );
}
