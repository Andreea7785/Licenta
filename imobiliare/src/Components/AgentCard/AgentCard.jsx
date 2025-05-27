import { useNavigate } from "react-router-dom";

function AgentCard({ userId, firstname, lastname, title, profile_picture }) {
  const navigate = useNavigate();

  return (
    <div className="agent-card">
      <img src={`/images/${profile_picture}`} alt={firstname} />
      <h3>
        {firstname} {lastname}
      </h3>
      <p>{title}</p>
      <button onClick={() => navigate(`/agent/${userId}`)}>
        Află mai multe...
      </button>
    </div>
  );
}

export default AgentCard;
