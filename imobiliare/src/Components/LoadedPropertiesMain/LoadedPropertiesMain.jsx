import React, { useEffect, useState } from "react";
import RealEstateCard from "../RealEstateCard/RealEstateCard";
import { Grid, Typography, Box } from "@mui/material";

export default function LoadedPropertiesMain() {
  const [properties, setProperties] = useState([]);
  const currentEmail = localStorage.getItem("agent_email");

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
    <Box sx={{ padding: "50px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "black",
          fontSize: "27px",
          textAlign: "center",
          mb: 4,
        }}
      >
        Proprietățile mele
      </Typography>
      <Grid container spacing={4} justifyContent="center">
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
