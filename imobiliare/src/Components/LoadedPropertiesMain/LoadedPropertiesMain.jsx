import React, { useEffect, useState } from "react";
import RealEstateCard from "../RealEstateCard/RealEstateCard";
import { Grid, Typography, Box } from "@mui/material";

export default function LoadedPropertiesMain() {
  const [properties, setProperties] = useState([]);
  const currentEmail = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    if (!currentEmail) return;

    fetch(
      `http://localhost:8080/api/properties/agent?email=${encodeURIComponent(
        currentEmail
      )}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Rețea răspuns nu este ok");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Datele nu sunt array");
        const processed = data.map((p, index) => ({
          ...p,
          id: `${p.title}-${index}`,
          preview: p.images
            ? `/images/${p.images.split(",")[0]}`
            : "/images/default.jpg",
          code: index + 1,
          location: p.adress,
          rating: 5,
        }));
        setProperties(processed);
      })
      .catch((error) => {
        console.error("Eroare la încărcarea proprietăților:", error);
      });
  }, [currentEmail]);

  return (
    <Box sx={{ padding: "50px", backgroundColor: "#FFFFFF " }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "35px",
          fontStyle: "normal",
          marginTop: "15px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#2b2d42",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
          pb: "60px",
        }}
      >
        Proprietățile mele
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {properties.map((card) => (
          <Grid
            item
            key={card.id}
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <RealEstateCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
