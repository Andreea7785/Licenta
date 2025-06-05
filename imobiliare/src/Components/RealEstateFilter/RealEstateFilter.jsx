import React, { useState } from "react";
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
import backgroundImage from "../../assets/background_filter.png";

const RealEstateFilter = ({ filter, setFilter, agents, zones }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleChange = (field) => (event) => {
    setFilter((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };
  console.log("AGENTS în dropdown:", agents);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
        padding: 3,
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        margin: 5,
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

        {/* Filtre principale */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 2,
          }}
        >
          {/* Tip */}
          <FormControl
            variant="filled"
            size="small"
            sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>Tip</InputLabel>
            <Select
              value={filter.tip}
              onChange={handleChange("tip")}
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">Toate</MenuItem>
              <MenuItem value="casă">Casă</MenuItem>
              <MenuItem value="apartament">Apartament</MenuItem>
              <MenuItem value="garsonieră">Garsonieră</MenuItem>
            </Select>
          </FormControl>

          {/* Suprafață */}
          <FormControl
            variant="filled"
            size="small"
            sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>Suprafață</InputLabel>
            <Select
              value={filter.suprafata}
              onChange={handleChange("suprafata")}
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">Toate</MenuItem>
              <MenuItem value="sub50">Sub 50 mp</MenuItem>
              <MenuItem value="intre50-100">Între 50–100 mp</MenuItem>
              <MenuItem value="peste100">Peste 100 mp</MenuItem>
            </Select>
          </FormControl>

          {/* Preț */}
          <FormControl
            variant="filled"
            size="small"
            sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
          >
            <InputLabel>Preț</InputLabel>
            <Select
              value={filter.pret}
              onChange={handleChange("pret")}
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="">Toate</MenuItem>
              <MenuItem value="sub50000">Sub 50.000 €</MenuItem>
              <MenuItem value="intre50-100">50.000 – 100.000 €</MenuItem>
              <MenuItem value="intre100-150">100.000 – 150.000 €</MenuItem>
              <MenuItem value="peste150">Peste 150.000 €</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Buton pentru mai multe filtre */}
        <Button
          type="button"
          variant="text"
          endIcon={<ExpandMoreIcon />}
          onClick={() => setShowMoreFilters((prev) => !prev)}
          sx={{ color: "white", textTransform: "none", fontWeight: "bold" }}
        >
          {!showMoreFilters ? "Mai multe filtre" : "Mai puține filtre"}
        </Button>

        {/* Mai multe filtre */}
        {showMoreFilters && (
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
            {/* Camere */}
            <FormControl
              variant="filled"
              size="small"
              sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>Camere</InputLabel>
              <Select
                value={filter.camere}
                onChange={handleChange("camere")}
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value="">Toate</MenuItem>
                <MenuItem value="1">1 cameră</MenuItem>
                <MenuItem value="2">2 camere</MenuItem>
                <MenuItem value="3">3 camere</MenuItem>
                <MenuItem value="4plus">4 sau mai multe camere</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="filled"
              size="small"
              sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>Agent</InputLabel>
              <Select
                value={filter.agent}
                onChange={handleChange("agent")}
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value="">Toți</MenuItem>
                {agents.map((agent) => (
                  <MenuItem
                    key={agent.userId}
                    value={`${agent.firstname} ${agent.lastname}`}
                  >
                    {agent.firstname} {agent.lastname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              variant="filled"
              size="small"
              sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 2 }}
            >
              <InputLabel>Zonă</InputLabel>
              <Select
                value={filter.zona}
                onChange={handleChange("zona")}
                IconComponent={ExpandMoreIcon}
              >
                <MenuItem value="">Toate</MenuItem>
                {zones.map((zona) => (
                  <MenuItem key={zona} value={zona}>
                    {zona}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RealEstateFilter;
