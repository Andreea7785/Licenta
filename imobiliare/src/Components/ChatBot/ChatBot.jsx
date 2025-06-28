import React, { useState } from "react";
import "./ChatBot.css";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `Ești un asistent virtual prietenos care răspunde întrebărilor utilizatorilor despre compania noastră de imobiliare.
      Noi suntem o agentie imobiliara care ne ocupam cu vanzarea apartamentelor, agentia se numeste HomeDeal. Utilizatorul poate cauta proprietati, daca acesta are intrebari poate contacta agentul imobiliar pentru o anumita proprietate.
      Exista un buton "Discuta cu agentul imobiliar" pe care daca da click i se deschide chat ul cu agentul.
      Acesta poate programa o vizionare intrand pe pagina proprietatii dorite si apasand butonul "Programeaza o vizionare", in care acesta pune data la care doreste.
      Utilizatorul va fi notificat pe email cand agentul imobliar ii va accepta programarea, agentul imobiliar trebuie sa o accepte.
      Daca utilizatorul te intreaba alte detalii pe care nu ti le am mentionat mai sus, spune le ca ne poate trimit un mail, la mail ul afisat in partea de jos a website-ului"
      
      "
      `,
    },
    { role: "assistant", content: "Salut! Cu ce te pot ajuta?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY =
    "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";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: updatedMessages,
        }),
      });

      const data = await res.json();
      const botMessage = data.choices[0].message;
      setMessages([...updatedMessages, botMessage]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Eroare: nu am putut trimite mesajul." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            HomeDeal assistant
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages
              .filter((m) => m.role !== "system")
              .map((msg, i) => (
                <div key={i} className={`chatbot-message ${msg.role}`}>
                  <div className="chatbot-bubble">{msg.content}</div>
                </div>
              ))}
            {loading && <div className="chatbot-loading">Chatbot scrie...</div>}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Scrie un mesaj..."
              className="chatbot-input"
            />
            <button className="chatbot-send" onClick={sendMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <SmartToyIcon sx={{ width: "unset", height: "unset" }} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
