import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import {
  FaRulerCombined,
  FaDoorOpen,
  FaBath,
  FaLayerGroup,
  FaThLarge,
  FaHome,
  FaMapMarkerAlt,
  FaUserTie,
  FaMoneyBillWave,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import Modal from "@mui/material/Modal";

import "./PropertyMain.css";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { PersonalInformations } from "../PersonalInformations/PersonalInformations";
import DateTimeField from "../DateTimeField/DateTimeField";
import dayjs from "dayjs";
import { FiLogIn } from "react-icons/fi";

export default function PropertyMain() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [favorit, setFavorit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [appointmentData, setAppointmentData] = useState({
    date: dayjs(),
    observations: "",
  });

  const handleClose = () => {
    setAppointmentData({
      date: dayjs(),
      observations: "",
    });
    setSuccessMessage(null);
    navigate("/istoric");
    setIsOpen(false);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error("Eroare la fetch:", err));
  }, [id]);

  if (!property) return <p>Se încarcă...</p>;

  const imageList = property.images?.split(",").map((img) => img.trim()) || [];

  const user = JSON.parse(localStorage.getItem("user"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const createAppointment = async () => {
    const formData = new FormData();
    formData.append("client_id", user.id);
    formData.append("observations", appointmentData.observations);
    formData.append("date", dayjs(appointmentData.date).toISOString());
    formData.append("property_id", property.property_id);

    console.log(user.id);

    const payload = {
      client_id: user.id,
      observations: appointmentData.observations,
      date: dayjs(appointmentData.date).toISOString().slice(0, 16),
      property_id: property.property_id,
    };
    try {
      const response = await fetch(
        "http://localhost:8080/api/appointments/create",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
      } else {
        setSuccessMessage(
          "Programarea realizata cu succes! Poti vedea programarile in sectiunea 'Istoric'."
        );
        setTimeout(() => {
          navigate("/istoric");
        }, 1500);
      }
    } catch (err) {
      console.error("Eroare la crearea programării:", err);
    }
  };

  return (
    <div className="property-main">
      <div className="property-title">
        <h2>{property.title}</h2>
      </div>
      <div className="top-section">
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Slider {...sliderSettings}>
            {imageList.map((img, index) => (
              <div key={index}>
                <img
                  src={`/images/${img}`}
                  alt={`Poza ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </Slider>

          {property.suitable_for && (
            <div className="suitable-label">
              Potrivit pentru: {property.suitable_for}
            </div>
          )}

          <button
            className="favorite-button"
            onClick={() => setFavorit(!favorit)}
          >
            {favorit ? (
              <FaHeart className="heart-icon active" />
            ) : (
              <FaRegHeart className="heart-icon" />
            )}
          </button>
        </div>

        <div className="right">
          <div className="property-details">
            <div className="title-right">
              <h3>Alte Detalii</h3>
            </div>
            <div className="grid-info">
              <div className="info-box">
                <FaMapMarkerAlt className="icon" />
                <span>Adresă: {property.adress}</span>
              </div>
              <div className="info-box">
                <FaUserTie className="icon" />
                <span>
                  Agent asignat: {property.agent.firstname}{" "}
                  {property.agent.lastname}
                </span>
              </div>
              <div className="info-box">
                <FaMoneyBillWave className="icon" />
                <span>Preț: {property.price.toLocaleString("ro-RO")} €</span>
              </div>
            </div>
          </div>

          {property.facilities && property.facilities.length > 0 && (
            <div className="property-facilities">
              <div className="title-right">
                <h3>Facilități</h3>
              </div>
              <ul>
                {property.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="presentation">
        <h3>Prezentare generală</h3>
        <div className="presentation-wrapper">
          <div className="info-box">
            <FaDoorOpen className="icon" />
            <span>Camere: {property.rooms}</span>
          </div>
          <div className="info-box">
            <FaBath className="icon" />
            <span>Băi: {property.bathrooms}</span>
          </div>
          <div className="info-box">
            <FaLayerGroup className="icon" />
            <span>Etaj: {property.floor}</span>
          </div>
          <div className="info-box">
            <FaThLarge className="icon" />
            <span>Compartimentare: {property.compartmentalization}</span>
          </div>
          <div className="info-box">
            <FaHome className="icon" />
            <span>An construcție: {property.year}</span>
          </div>
          <div className="info-box">
            <FaRulerCombined className="icon" />
            <span>Suprafață: {property.surface} m²</span>
          </div>
        </div>
      </div>
      <div className="property-description">
        <h3>Despre această proprietate</h3>
        <div className="description-box">
          <p>{property.description}</p>

          <button
            disabled={!user}
            className="schedule-button"
            onClick={() => setIsOpen(true)}
          >
            Programează o vizionare
          </button>
          {!user ? (
            <span>
              Important: Conecteaza-te pentru a programa o vizionare.{" "}
              <a href="/login" className="login-link">
                Autentifica-te <FiLogIn />
              </a>
            </span>
          ) : (
            <></>
          )}
        </div>
        {isOpen ? (
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
                minWidth: 300,
              }}
            >
              <PersonalInformations
                user={user}
                showDocuments={false}
                hideTitle={true}
              />
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mt: 2 }}>
                <Typography variant="h6" marginBottom={"20px"}>
                  Date programare
                </Typography>
                <Grid spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Box sx={{ width: 300 }}>
                      <DateTimeField
                        value={appointmentData.date}
                        onChange={(e) => {
                          console.log(e);
                          setAppointmentData((prev) => ({
                            ...prev,
                            date: e,
                          }));
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} mt={5}>
                    <TextField
                      label="Observatii"
                      fullWidth
                      name="observations"
                      value={appointmentData.observations}
                      variant="outlined"
                      onChange={(e) =>
                        setAppointmentData((prev) => ({
                          ...prev,
                          observations: e.target.value,
                        }))
                      }
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              {successMessage ? (
                <p style={{ color: "green", marginTop: "15px" }}>
                  {successMessage}
                </p>
              ) : (
                <></>
              )}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                  sx={{ background: "black", color: "white" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Anulează
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={createAppointment}
                >
                  Salvează
                </Button>
              </Box>
            </Box>
          </Modal>
        ) : (
          <></>
        )}
        <h3>Locația pe hartă</h3>
        <div className="map-container">
          <iframe
            title="Google Maps"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.adress
            )}&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
