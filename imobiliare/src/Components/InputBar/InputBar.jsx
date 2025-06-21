import React, { useState, useCallback } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";

const InputBar = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = useCallback(() => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  }, [input, onSend]);
  ("input");
  return (
    <Box sx={{ p: 1, borderTop: "1px solid #ccc" }}>
      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Scrie un mesaj..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={!input.trim()}
        >
          Trimite
        </Button>
      </Stack>
    </Box>
  );
};

export default React.memo(InputBar);
