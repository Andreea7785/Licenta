import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useChat } from "../../context/ChatContext";
import MessageList from "../MessageList/MessageList";
import InputBar from "../InputBar/InputBar";

const ChatWindow = () => {
  const { activeChat, messages, sendMessage, setActiveChat, user } = useChat();

  if (!activeChat) return null;

  const currentMessages = messages[activeChat] || [];

  const handleSend = (text) => {
    sendMessage(activeChat, text);
  };
  ("chat window");
  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 350,
        maxHeight: 500,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        zIndex: 1300,
        borderRight: "16px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#002147",
          color: "white",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveChat(null)}
      >
        <Typography variant="subtitle1">Chat cu user {activeChat}</Typography>
        <IconButton size="small" onClick={() => setActiveChat(null)}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      <MessageList messages={currentMessages} userId={user.id} />
      <InputBar onSend={handleSend} />
    </Paper>
  );
};

export default ChatWindow;
