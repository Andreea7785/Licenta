import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const RealEstateCard = ({ card }) => {
  const generatedImages = [
    `property${card.code}1.jpg`,
    `property${card.code}2.jpg`,
    `property${card.code}3.jpg`,
  ];

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((item) => item.id === card.id);
    setIsFavorite(exists);
  }, []);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some((item) => item.id === card.id);

    if (exists) {
      favorites = favorites.filter((item) => item.id !== card.id);
      setIsFavorite(false);
    } else {
      favorites.push(card);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 320,
      }}
    >
      <CardMedia
        component="img"
        image={`/images/${generatedImages[0]}`}
        alt={card.title}
        sx={{ height: 180, objectFit: "cover" }}
      />
      <Chip
        label="Vanzare"
        color="error"
        size="small"
        sx={{ position: "absolute", top: 10, left: 10, borderRadius: "0px" }}
      />
      <IconButton
        aria-label="add to favorites"
        onClick={toggleFavorite}
        style={{
          position: "absolute",
          bottom: "55%",
          backgroundColor: "red",
          borderRadius: "0px",
          color: "white",
          left: 10,
          padding: 4,
        }}
      >
        {isFavorite ? <FavoriteIcon color="white" /> : <FavoriteBorderIcon />}
      </IconButton>
      <Chip
        label={`${card.rating} ★`}
        color="warning"
        size="small"
        sx={{ position: "absolute", top: 10, right: 10 }}
      />
      <Chip
        label={card.price}
        color="primary"
        sx={{
          position: "absolute",
          bottom: "55%",
          right: 10,
          borderRadius: "0px",
          backgroundColor: "red",
        }}
      />
      <CardContent>
        <div className="title-card">
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              height: "3em",
              lineHeight: "1.5em",
            }}
          >
            {card.title}
          </Typography>
        </div>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" ml={0.5}>
            {card.location}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          FD: {card.code}
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Box display="flex" alignItems="center">
            <HotelIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {card.rooms}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <BathtubIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {card.bathrooms}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <SquareFootIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {card.surface} mp
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" href={`/property/${card.code}`} component="a">
          Vezi detalii
        </Button>
      </CardActions>
    </Card>
  );
};

export default RealEstateCard;
