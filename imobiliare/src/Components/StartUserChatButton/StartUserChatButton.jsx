import React from "react";
import { Button } from "@mui/material";
import { useChat } from "../../context/ChatContext";

const StartUserChatButton = ({ agentId, propertyId }) => {
  const { openChatWith } = useChat();
  console.log(agentId, propertyId);

  const handleClick = () => {
    openChatWith(agentId, propertyId);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Discută cu agentul
    </Button>
  );
};

export default StartUserChatButton;
