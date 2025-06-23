import React from "react";
import "./FooterAgent.css";
import logo from "../../assets/logo.png";

export default function FooterAgent() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="footer-center">
        <h1>Resurse utile</h1>
        <a href="/ghid-agenti" target="_blank" rel="noopener noreferrer">
          Ghid pentru agenți
        </a>
        <br></br>
        <a href="/regulament-intern" target="_blank" rel="noopener noreferrer">
          Regulament intern
        </a>
        <br></br>
        <a
          href="/intrebari-frecvente-agent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Întrebări frecvente
        </a>
      </div>

      <div className="footer-right">
        <h1>Date de contact interne</h1>
        <p>Suport tehnic: it@homedeal.com</p>
        <p>Manager agenție: manager@homedeal.com </p>
        <p>Telefon intern: +40 700 100 234 </p>
      </div>
    </div>
  );
}
