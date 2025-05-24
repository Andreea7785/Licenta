import React, { useState } from "react";
import backgroundImage from "../../assets/background_filter.png";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const RealEstateFilter = () => {
  const [showMorefilters, setShowMoreFilters] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
        padding: 4,
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Casa visurilor tale te așteaptă!
        </Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: "italic", mb: 3 }}>
          Descoperă cele mai bune oferte imobiliare și găsește locuința perfectă
          pentru tine.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 2,
          }}
        >
          <FormControl
            key={"Tip"}
            variant="filled"
            size="small"
            sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>{"Tip"}</InputLabel>
            <Select
              label={"Tip"}
              IconComponent={ExpandMoreIcon}
              defaultValue=""
            >
              <MenuItem value="">Selectează</MenuItem>
              <MenuItem value="1">Opțiune 1</MenuItem>
              <MenuItem value="2">Opțiune 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            key={"Zona"}
            variant="filled"
            size="small"
            sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>{"Zona"}</InputLabel>
            <Select
              label={"Zona"}
              IconComponent={ExpandMoreIcon}
              defaultValue=""
            >
              <MenuItem value="">Selectează</MenuItem>
              <MenuItem value="1">Opțiune 1</MenuItem>
              <MenuItem value="2">Opțiune 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            key={"Suprafata"}
            variant="filled"
            size="small"
            sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>{"Suprafata"}</InputLabel>
            <Select
              label={"Suprafata"}
              IconComponent={ExpandMoreIcon}
              defaultValue=""
            >
              <MenuItem value="">Selectează</MenuItem>
              <MenuItem value="1">Opțiune 1</MenuItem>
              <MenuItem value="2">Opțiune 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            key={"Oras"}
            variant="filled"
            size="small"
            sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>{"Oras"}</InputLabel>
            <Select
              label={"Oras"}
              IconComponent={ExpandMoreIcon}
              defaultValue=""
            >
              <MenuItem value="">Selectează</MenuItem>
              <MenuItem value="1">Opțiune 1</MenuItem>
              <MenuItem value="2">Opțiune 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="text"
          endIcon={<ExpandMoreIcon />}
          onClick={() => setShowMoreFilters((prev) => !prev)}
          sx={{ color: "white", textTransform: "none", fontWeight: "bold" }}
        >
          {!showMorefilters ? "Mai multe filtre" : "Mai putin filtre"}{" "}
        </Button>
        {showMorefilters && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 2,
              padding: "10px",
            }}
          >
            <FormControl
              key={"Tip"}
              variant="filled"
              size="small"
              sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>{"Tip"}</InputLabel>
              <Select
                label={"Tip"}
                IconComponent={ExpandMoreIcon}
                defaultValue=""
              >
                <MenuItem value="">Selectează</MenuItem>
                <MenuItem value="1">Opțiune 1</MenuItem>
                <MenuItem value="2">Opțiune 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              key={"Zona"}
              variant="filled"
              size="small"
              sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>{"Zona"}</InputLabel>
              <Select
                label={"Zona"}
                IconComponent={ExpandMoreIcon}
                defaultValue=""
              >
                <MenuItem value="">Selectează</MenuItem>
                <MenuItem value="1">Opțiune 1</MenuItem>
                <MenuItem value="2">Opțiune 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              key={"Suprafata"}
              variant="filled"
              size="small"
              sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>{"Suprafata"}</InputLabel>
              <Select
                label={"Suprafata"}
                IconComponent={ExpandMoreIcon}
                defaultValue=""
              >
                <MenuItem value="">Selectează</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              key={"Oras"}
              variant="filled"
              size="small"
              sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>{"Oras"}</InputLabel>
              <Select
                label={"Oras"}
                IconComponent={ExpandMoreIcon}
                defaultValue=""
              >
                <MenuItem value="">Selectează</MenuItem>
                <MenuItem value="1">Opțiune 1</MenuItem>
                <MenuItem value="2">Opțiune 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
      </Box>
    </Box>
  );
};
