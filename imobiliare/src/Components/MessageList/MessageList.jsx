import React, { useEffect, useRef } from "react";
import { Box, Paper, Stack, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const MessageList = React.memo(({ messages, userId }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  ("message list");

  return (
    <Box sx={{ flex: 1, p: 1, overflowY: "auto", backgroundColor: "#f5f5f5" }}>
      {messages.map((msg, i) => {
        const isMine = msg.senderId === userId;
        return (
          <Stack
            key={msg.id || i}
            direction="row"
            justifyContent={isMine ? "flex-end" : "flex-start"}
            alignItems="center"
            spacing={1}
            mb={1}
          >
            {!isMine && <PersonIcon />}
            <Paper
              sx={{
                p: 1,
                backgroundColor: isMine ? "#c5a392" : "#e0e0e0",
                color: isMine ? "white" : "black",
                maxWidth: "70%",
              }}
            >
              <Typography variant="body2">{msg.content}</Typography>
            </Paper>
            {isMine && <PersonIcon />}
          </Stack>
        );
      })}
      <div ref={chatRef} />
    </Box>
  );
});

export default MessageList;
