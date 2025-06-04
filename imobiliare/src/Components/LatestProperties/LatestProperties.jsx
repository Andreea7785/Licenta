import { useEffect, useState } from "react";
import { RealEstateList } from "../RealEstateList/RealEstateList";

export default function LatestProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties/latest")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => ({
          id: p.property_id,
          title: p.title,
          location: `${p.area}, ${p.city}`,
          price: `${p.price.toLocaleString()} EUR`,
          surface: p.surface,
          rooms: p.rooms,
          bathrooms: p.bathrooms,
          image: `/images/${p.image}`,
          rating: 5,
          code: p.property_id,
        }));
        setProperties(formatted);
      })
      .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

  return (
    <div className="content">
      <h2>Cele mai noi proprietăți</h2>
      <RealEstateList properties={properties} />
    </div>
  );
}
