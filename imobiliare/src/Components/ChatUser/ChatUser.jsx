import "./sock-fix";
import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import {
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

let stompClient = null;

const ChatApp = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [receiver, setReceiver] = useState("");
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [connected, setConnected] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/chat-websocket");
    stompClient = over(socket);
    stompClient.connect({ userId: user.id }, () => {
      stompClient.subscribe("/user/queue/messages", (msg) => {
        const message = JSON.parse(msg.body);
        if (message.senderId !== user.id) {
          setChat((prev) => [...prev, message]);
        }
      });
      setConnected(true);
    });
  };

  const sendMessage = () => {
    if (input.trim() && user?.id && receiver.trim()) {
      const msg = {
        senderId: user.id,
        receiverId: receiver,
        content: input,
      };
      stompClient.send(
        `/app/chat.private.${receiver}`,
        {},
        JSON.stringify(msg)
      );
      setChat((prev) => [...prev, msg]);
      setInput("");
    }
  };

  if (!user) {
    return (
      <Box p={4}>
        <Typography>Nu ești autentificat.</Typography>
      </Box>
    );
  }

  if (!connected) {
    return (
      <Box p={4} maxWidth={400} mx="auto">
        <Typography variant="h6" gutterBottom>
          Bun venit, <strong>{user.name}</strong>
        </Typography>
        <TextField
          fullWidth
          label="ID destinatar"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          margin="normal"
        />
        <Button fullWidth variant="contained" onClick={connect}>
          Conectează-te la chat
        </Button>
      </Box>
    );
  }

  return (
    <Box p={4} maxWidth={600} mx="auto">
      <Typography variant="h6" gutterBottom>
        Chat cu <strong>{receiver}</strong>
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 2,
          padding: 2,
          height: 400,
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
          mb: 2,
        }}
      >
        {chat.map((msg, i) => {
          const isMine = msg.senderId === user.id;
          return (
            <Stack
              key={i}
              direction="row"
              spacing={1}
              justifyContent={isMine ? "flex-end" : "flex-start"}
              mb={1}
            >
              {!isMine && (
                <Avatar sx={{ bgcolor: "#c5a392" }}>
                  {String(msg.senderId).charAt(0)}
                </Avatar>
              )}
              <Paper
                elevation={1}
                sx={{
                  padding: "8px 12px",
                  backgroundColor: isMine ? "#c5a392" : "#e0e0e0",
                  color: isMine ? "#fff" : "#000",
                  maxWidth: "70%",
                }}
              >
                <Typography variant="body2">{msg.content}</Typography>
              </Paper>
              {isMine && (
                <Avatar sx={{ bgcolor: "#388e3c" }}>
                  {String(user.id).charAt(0)}
                </Avatar>
              )}
            </Stack>
          );
        })}
        <div ref={chatRef} />
      </Box>

      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Scrie un mesaj..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" onClick={sendMessage}>
          Trimite
        </Button>
      </Stack>
    </Box>
  );
};

export default ChatApp;
