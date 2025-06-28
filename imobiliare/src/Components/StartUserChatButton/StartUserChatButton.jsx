import React from "react";
import { Button } from "@mui/material";
import { useChat } from "../../context/ChatContext";
import "./StartChatButton.css";
const StartUserChatButton = ({ agentId, label, disabled }) => {
  const { openChatWith } = useChat();

  const handleClick = () => {
    openChatWith(agentId);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className="start-chat-button"
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default StartUserChatButton;
