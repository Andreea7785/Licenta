import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#e3ded9",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "800px",
          height: "500px",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#a88a75",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Bine ai revenit!
          </Typography>
          <Typography variant="body1" align="center">
            Conectează-te pentru a explora cele mai bune oferte imobiliare de la
            HomeDeal.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Conectează-te
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Parolă"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: 1,
            }}
          >
            <Link href="#" underline="hover" color="black">
              Ți-ai uitat parola?
            </Link>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#c5a392",
              color: "white",
              marginY: 2,
              paddingY: 1.5,
            }}
            fullWidth
          >
            Intră în cont
          </Button>
          <Typography variant="body2" align="center">
            Nu ai cont?{" "}
            <Link href="/create-an-account" sx={{ color: "black" }}>
              Creează un cont
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
