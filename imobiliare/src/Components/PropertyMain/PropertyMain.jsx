import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import "./PropertyMain.css";

export default function PropertyMain() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [favorit, setFavorit] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error("Eroare la fetch:", err));
  }, [id]);

  if (!property) return <p>Se încarcă...</p>;

  const imageList = property.images?.split(",").map((img) => img.trim()) || [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
            <h3>Alte Detalii</h3>
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
              <h3>Facilități</h3>
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
          <button className="schedule-button">Programează o vizionare</button>
        </div>

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
