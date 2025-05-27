import React, { useEffect, useState } from "react";
import "./MainAgents.css";
import { useNavigate } from "react-router-dom";

export default function MainAgents() {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/agents")
      .then((res) => res.json())
      .then((data) => setAgents(data))
      .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

  return (
    <div className="agents">
      <div className="title">
        <h1>Echipa noastră</h1>
      </div>
      <div className="content">
        <p>
          La HomeDeal, știm cât de important este să ai alături un profesionist
          de încredere în procesul de cumpărare a unui imobil. De aceea, îți
          oferim posibilitatea de a alege agentul imobiliar cu care vrei să
          lucrezi, în funcție de experiența sa, specializările și tranzacțiile
          anterioare încheiate cu succes.
        </p>
      </div>

      <div className="card-container">
        {agents.map((agent) => (
          <div key={agent.userId} className="agent-card">
            <img
              src={`/images/${agent.profilePicture}`}
              alt={`${agent.firstname} ${agent.lastname}`}
            />

            <h3>
              {agent.firstname} {agent.lastname}
            </h3>
            <p>{agent.title}</p>
            <button onClick={() => navigate(`/agent/${agent.userId}`)}>
              Află mai multe...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
