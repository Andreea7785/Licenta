function AgentCard({ agent }) {
  return (
    <div className="agent-card">
      <img src="/poza-placeholder.jpg" alt="Agent" />
      <h3>
        {agent.firstname} {agent.lastname}
      </h3>
      <p>{agent.description}</p>
      <button>Afla mai multe..</button>
    </div>
  );
}

export default AgentCard;
