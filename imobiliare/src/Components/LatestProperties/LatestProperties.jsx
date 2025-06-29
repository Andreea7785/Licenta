import { useEffect, useState } from "react";
import { RealEstateList } from "../RealEstateList/RealEstateList";
import { formatPropertyObject } from "../../utils/utils";

export default function LatestProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties/latest")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => formatPropertyObject(p));
        setProperties(formatted);
      })
      .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

  return (
    <div className="content">
      <h2 style={{ marginLeft: "50px" }}>Cele mai noi proprietăți</h2>
      <RealEstateList properties={properties} />
    </div>
  );
}
