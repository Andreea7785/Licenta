import React, { useState } from "react";
import "./FAQAgentMain.css";

const faqData = [
  {
    question: "Cum adaug o proprietate?",
    answer:
      "Accesează meniul „Încarcă proprietate”, completează formularul cu toate detaliile (titlu, descriere, tip, zonă, imagini etc.) și salvează. Proprietatea va apărea în pagina „Proprietățile mele”.",
  },

  {
    question: "Cum aflu dacă un client a făcut o programare?",
    answer:
      "Toate programările apar în pagina „Programări vizionări”. Vei vedea statusul lor: În așteptare, Acceptat sau Respins.",
  },
  {
    question: "Cum comunic cu un client?",
    answer:
      "Folosește sistemul de mesaje din colțul din dreapta sus. Chat-ul se deschide într-un pop-up și salvează automat istoricul conversațiilor.",
  },
  {
    question: "Unde pot vedea performanța mea?",
    answer:
      "În pagina „Rapoartele mele” poți consulta diferențele între prețuri, tipurile de proprietăți vândute și programările gestionate lunar.",
  },
  {
    question: "Ce fac dacă am uitat să actualizez o ofertă?",
    answer:
      "Poți reveni oricând asupra unei proprietăți și o poți actualiza din „Proprietățile mele”. Este recomandat să verifici periodic statusul și datele publicate.",
  },
  {
    question: "Cum contactez echipa de suport?",
    answer:
      "Pentru întrebări tehnice sau administrative, scrie un e-mail la: intern@homedeal.ro.",
  },
  {
    question: "Cum pot vedea programările pentru o anumită proprietate?",
    answer:
      "În pagina „Programări vizionări” sunt afișate toate cererile primite. Poți filtra sau căuta după numele proprietății sau după client.",
  },
  {
    question: "Ce se întâmplă dacă nu răspund la o programare?",
    answer:
      "Programările fără răspuns rămân în status „În așteptare”. Este recomandat să răspunzi cât mai rapid pentru a evita pierderea clientului.",
  },
  {
    question: "Cum știu dacă am mesaje necitite?",
    answer:
      "În colțul din dreapta sus apare o iconiță de mesaje cu un badge roșu care indică numărul de mesaje necitite.",
  },
  {
    question: "Pot vedea doar proprietățile mele?",
    answer:
      "Da. Fiecare agent are acces exclusiv la anunțurile încărcate de el, în secțiunea „Proprietățile mele”.",
  },
  {
    question: "De ce nu îmi apar rapoartele firmei?",
    answer:
      "Rapoartele la nivel de firmă sunt vizibile doar agenților activi care au avut activitate în luna curentă.",
  },
  {
    question: "Cum pot semnala o eroare în platformă?",
    answer:
      "Trimite un e-mail către intern@homedeal.ro cu o descriere clară și, dacă e posibil, un screenshot al erorii.",
  },
];

export default function FAQAgentMain() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h1>Întrebări frecvente</h1>
      <br></br>
      {faqData.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div className="faq-question" onClick={() => toggleIndex(index)}>
            <span>{item.question}</span>
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
