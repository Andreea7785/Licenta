import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AgentDetails.css";

export default function AgentDetails() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/agents/${id}`)
      .then((res) => res.json())
      .then((data) => setAgent(data))
      .catch((err) => console.error("Eroare la fetch:", err));
  }, [id]);

  if (!agent) return <p>Se încarcă...</p>;

  return (
    <div className="agent-details">
      <div className="profile-picture">
        <img src={`/images/${agent.profilePicture}`} alt={agent.firstname} />
      </div>
      <div className="content-agent-details">
        <h1>
          {agent.firstname} {agent.lastname}
        </h1>
        <h2>{agent.title}</h2>
        <p>{agent.description}</p>
        <h2>Contact</h2>
        <p>
          <strong>Email: </strong>
          {agent.email}
        </p>
        <p>
          <strong>Telefon:</strong> 0{agent.phoneNumber}
        </p>
      </div>
    </div>
  );
}
