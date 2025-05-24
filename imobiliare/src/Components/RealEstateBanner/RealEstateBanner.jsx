import React, { useEffect, useState } from "react";
import "./RealEstateBanner.css";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const interval = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

export const RealEstateBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-header">
        <h1>TRANZACȚII IMOBILIARE</h1>
        <p>RAPIDE, SIGURE ȘI EFICIENTE.</p>
      </div>
      <div className="banner-body">
        <div className="banner-about">
          <h2>Despre Noi</h2>
          <p>
            La HomeDeal suntem dedicați să oferim servicii de calitate care să
            răspundă nevoilor și dorințelor clienților noștri. Înființați în
            2019, ne-am propus să aducem un impact real în imobiliare, oferind
            soluții inovative și personalizate.
          </p>
        </div>

        <div className="banner-stats">
          <div className="stat-item stat-beige">
            <h3>{<Counter target={8000} />} clienți</h3>
            <p>mulțumiți</p>
          </div>
          <div className="stat-item stat-brown">
            <h3>{<Counter target={10000} />} locuințe</h3>
            <p>vândute</p>
          </div>
          <div className="stat-item stat-purple">
            <h3>{<Counter target={14000} />} utilizatori</h3>
            <p>ai platformei</p>
          </div>
        </div>
      </div>
    </div>
  );
};
