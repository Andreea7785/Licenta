import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    profile_picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      document: e.target.files[0],
    }));
  };

  const register = async () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors("Parolele nu coincid.");
      return;
    }
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.document
    ) {
      setErrors("Toate câmpurile sunt obligatorii.");
      return;
    }
    const data = new FormData();
    data.append("lastName", formData.lastName);
    data.append("firstName", formData.firstName);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("password", formData.password);
    data.append("document", formData.document);
    data.append("role", "client");

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
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
        navigate("/home");
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
        backgroundColor: "#193759",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 600,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 6,
          padding: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          Creează cont
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nume"
            name="lastName"
            onChange={handleChange}
            fullWidth
            margin="normal"
            required={true}
          />
          <TextField
            label="Prenume"
            name="firstName"
            onChange={handleChange}
            fullWidth
            margin="normal"
            required={true}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Email"
            name="email"
            onChange={handleChange}
            fullWidth
            margin="normal"
            required={true}
          />
          <TextField
            label="Telefon"
            name="phoneNumber"
            onChange={handleChange}
            fullWidth
            margin="normal"
            required={true}
          />
        </Box>
        <p> Încarcă o poza cu buletinul tău ⬇️</p>
        <input accept="image/*" type="file" onChange={handleFileChange} />
        <TextField
          label="Parolă"
          name="password"
          type="password"
          onChange={handleChange}
          fullWidth
          margin="normal"
          required={true}
        />
        <TextField
          label="Confirmare parolă"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          fullWidth
          margin="normal"
          required={true}
        />
        {errors ? <p style={{ color: "red" }}>{errors}</p> : <></>}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#193759",
            color: "white",
            marginTop: 3,
            paddingY: 1.5,
            borderRadius: 5,
          }}
          onClick={register}
          fullWidth
        >
          Înregistrare
        </Button>
        <Typography variant="body2" align="center" mt={2}>
          Ai deja cont?{" "}
          <Link
            href="/login"
            sx={{
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "black",
                textDecoration: "underline",
              },
            }}
          >
            Autentifică-te
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
