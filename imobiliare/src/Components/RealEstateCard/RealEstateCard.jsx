// components/RealEstateCard.tsx
import React from "react";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const RealEstateCard = ({
  title,
  location,
  price,
  surface,
  rooms,
  bathrooms,
  image,
  rating,
  code,
}) => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <Chip
        label="Vanzare"
        color="error"
        size="small"
        sx={{ position: "absolute", top: 10, left: 10, borderRadius: "0px" }}
      />
      <IconButton
        aria-label="add to favorites"
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
        <FavoriteBorderIcon />
      </IconButton>
      <Chip
        label={`${rating} ★`}
        color="warning"
        size="small"
        sx={{ position: "absolute", top: 10, right: 10 }}
      />
      <Chip
        label={price}
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
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" ml={0.5}>
            {location}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          FD: {code}
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Box display="flex" alignItems="center">
            <HotelIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {rooms}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <BathtubIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {bathrooms}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <SquareFootIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              {surface} mp
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" href={`/property/${code}`} component="a">
          Vezi detalii
        </Button>
      </CardActions>
    </Card>
  );
};

export default RealEstateCard;
