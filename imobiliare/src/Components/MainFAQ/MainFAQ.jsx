import React, { useState } from "react";
import "./MainFAQ.css";

export default function MainFAQ() {
  const faqData = [
    {
      question: "📅 Cum pot programa o vizionare?",
      answer:
        "După autentificare, accesează pagina proprietății dorite și folosește butonul 'Programează vizionare'. Un agent te va contacta pentru confirmare.",
    },
    {
      question: "🔐 Este necesar să am un cont pentru a contacta un agent?",
      answer:
        "Da, pentru a lua legătura cu agenții și a beneficia de funcționalitățile platformei este necesar să fii autentificat în contul tău.",
    },
    {
      question: "❤️ Cum pot salva o proprietate ca preferată?",
      answer:
        "Pe pagina fiecărei proprietăți vei găsi o iconiță sub formă de inimă. Dă click pe aceasta pentru a adăuga în lista ta de favorite.",
    },
    {
      question: "🔒 Datele mele personale sunt în siguranță?",
      answer:
        "Da. Respectăm toate reglementările GDPR, iar datele tale sunt procesate conform politicii de confidențialitate.",
    },
    {
      question: "📞 Ce fac dacă nu primesc răspuns de la agent?",
      answer:
        "Dacă agentul nu te contactează în 24 de ore, poți trimite un mesaj direct din contul tău sau poți contacta suportul tehnic.",
    },
    {
      question: "🌙 Ce fac dacă am o întrebare în afara programului de lucru?",
      answer:
        "Poți accesa oricând iconița de chat AI din colțul paginii. Asistentul virtual este disponibil 24/7 pentru întrebări generale.",
    },
    {
      question:
        "📋 Ce fac dacă nu găsesc o proprietate care să îndeplinească cerințele mele?",
      answer:
        "Accesează secțiunea 'Spune-ne ce cauți', completează formularul, iar un agent te va contacta imediat ce apare o proprietate potrivită.",
    },
    {
      question: "📆 Pot viziona o proprietate și în weekend?",
      answer:
        "Da, în funcție de disponibilitatea agentului. Majoritatea agenților oferă vizionări și în weekend, pe bază de programare.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faqClient-title">
        <strong>Întrebări frecvente</strong>
      </h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
