import React from "react";
import { Button } from "@mui/material";
import { useChat } from "../../context/ChatContext";

const StartUserChatButton = ({ agentId }) => {
  const { openChatWith } = useChat();
  agentId;

  const handleClick = () => {
    openChatWith(agentId);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Discută cu agentul
    </Button>
  );
};

export default StartUserChatButton;
