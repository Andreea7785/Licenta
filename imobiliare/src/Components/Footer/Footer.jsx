import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import "../../Pages/TermsAndConditions/TermsAndConditions.jsx";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="footer-center">
        <h1>Link-uri utile</h1>
        <a
          href="/termeni-si-conditii"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termeni și condiții
        </a>
        <br></br>
        <a
          href="/politica-de-confidentialitate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Politica de confidențialitate
        </a>
        <br></br>
        <a
          href="/intrebari-frecvente"
          target="_blank"
          rel="noopener noreferrer"
        >
          Întrebări frecvente
        </a>
      </div>

      <div className="footer-right">
        <h1>Contact</h1>
        <p>Adresă: Bulevardul Indepenței nr.80, Iași</p>
        <p>Email: homedeal@gmail.com </p>
        <p>Telefon: 0724590023 </p>
      </div>
    </div>
  );
}
