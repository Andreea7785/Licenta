import React, { useState } from "react";
import "./ChatBot.css";

import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatBot = () => {
  const latest = [
    {
      property_id: 52,
      agent: {
        userId: 7,
        role: "agent",
        firstname: "Elena",
        lastname: "Radu",
        email: "elena.radu@homedeal.com",
        password: "1234",
        phoneNumber: "711003344",
        description:
          "Elena este cunoscută pentru intermedierea vânzărilor către românii din diaspora. A contribuit la peste 50 de tranzacții internaționale și are o rețea extinsă de colaboratori externi.",
        document: null,
        profilePicture: "agent7.jpg",
        title: "Lucrează cu clienți din diaspora",
      },
      title: "test",
      description: "te",
      price: 3333,
      type: "apartament",
      adress: "dacia",
      city: "",
      floor: "3",
      compartmentalization: null,
      rooms: 4,
      suitable_for: "eef",
      facilities: ["tet:345m"],
      bathrooms: 3,
      year: 2009,
      images: "POZAaa.jpg",
      area: "efe",
      surface: 333,
      listing_date: "2025-06-18",
    },
    {
      property_id: 51,
      agent: {
        userId: 7,
        role: "agent",
        firstname: "Elena",
        lastname: "Radu",
        email: "elena.radu@homedeal.com",
        password: "1234",
        phoneNumber: "711003344",
        description:
          "Elena este cunoscută pentru intermedierea vânzărilor către românii din diaspora. A contribuit la peste 50 de tranzacții internaționale și are o rețea extinsă de colaboratori externi.",
        document: null,
        profilePicture: "agent7.jpg",
        title: "Lucrează cu clienți din diaspora",
      },
      title: "test",
      description: "test",
      price: 2,
      type: "apartament",
      adress: "dacia",
      city: "",
      floor: "5",
      compartmentalization: null,
      rooms: 1,
      suitable_for: "dada",
      facilities: ["test:23m"],
      bathrooms: 1,
      year: 2000,
      images: "poza.jpg",
      area: "dacia",
      surface: 555,
      listing_date: "2025-06-18",
    },
    {
      property_id: 53,
      agent: {
        userId: 7,
        role: "agent",
        firstname: "Elena",
        lastname: "Radu",
        email: "elena.radu@homedeal.com",
        password: "1234",
        phoneNumber: "711003344",
        description:
          "Elena este cunoscută pentru intermedierea vânzărilor către românii din diaspora. A contribuit la peste 50 de tranzacții internaționale și are o rețea extinsă de colaboratori externi.",
        document: null,
        profilePicture: "agent7.jpg",
        title: "Lucrează cu clienți din diaspora",
      },
      title: "test",
      description: "test",
      price: 344,
      type: "casă",
      adress: "dacia",
      city: "",
      floor: "3",
      compartmentalization: null,
      rooms: 2,
      suitable_for: "dada",
      facilities: ["test:200m"],
      bathrooms: 1,
      year: 2009,
      images: "poza.jpg",
      area: "dacia",
      surface: 222,
      listing_date: "2025-06-18",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `Ești un asistent virtual prietenos care răspunde întrebărilor utilizatorilor despre compania noastră de imobiliare. Oferi informații generale, program de lucru, servicii disponibile și răspunzi politicos, pe scurt. Acestea sunt anunturile: ${latest}`,
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
