import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f5f5dc, #d2b48c, #c5a392)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 6,
          padding: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          Creează cont
        </Typography>
        <TextField
          label="Nume complet"
          placeholder="Introduceți numele complet"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          placeholder="Introduceți email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Parolă"
          placeholder="Introduceți parola"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirmare parolă"
          placeholder="Reintroduceți parola"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#c5a392",
            color: "white",
            marginTop: 3,
            paddingY: 1.5,
            borderRadius: 5,
            "&:hover": {
              backgroundColor: "#8a664a",
            },
          }}
          fullWidth
        >
          Înregistrare
        </Button>
        <Typography variant="body2" align="center" mt={2}>
          Ai deja cont?{" "}
          <Link href="/login" sx={{ color: "black" }}>
            Autentifică-te
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
