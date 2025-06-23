import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      setErrors("Toate câmpurile sunt obligatorii.");
      return;
    }
    const data = new FormData();

    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        headers: {
          Accept: "application/json",
        },
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorText = await response.text();
        setErrors(errorText);
      } else {
        const data = await response.text();
        localStorage.setItem("user", data);
        data;
        let route = JSON.parse(data).role === "client" ? "/home" : "/dashboard";
        navigate(route);
        setErrors("");
      }
    } catch (err) {
      setErrors("Internal server error. Please contact our support.");
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#B2BCC7",
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
            backgroundColor: "#002147",
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
            name="email"
            value={formData.email}
            required={true}
            onChange={handleChange}
          />
          <TextField
            label="Parolă"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            required={true}
            onChange={handleChange}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: 1,
            }}
          >
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "black",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              Ți-ai uitat parola?
            </Link>
          </Box>
          {errors ? <p style={{ color: "red" }}>{errors}</p> : <></>}

          <Button
            variant="contained"
            sx={{
              background: "#002147",
              color: "white",
              marginY: 2,
              paddingY: 1.5,
            }}
            fullWidth
            onClick={login}
          >
            Intră în cont
          </Button>
          <Typography variant="body2" align="center">
            Nu ai cont?{" "}
            <Link
              href="/create-an-account"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            >
              Creează un cont
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
