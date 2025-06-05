import { useEffect, useMemo, useState } from "react";
import { RealEstateFilter } from "../../Components/RealEstateFilter/RealEstateFilter";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList";

export const AvailablePropMain = () => {
  const [availableProperties, setAvailableProperties] = useState([]);
  const [filter, setFilter] = useState({
    tip: "",
    zona: "",
    suprafataMin: 0,
    oras: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
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
          images: `/images/${p.image}`,
          rating: 5,
          tip: p.type,
          zona: p.area,
          oras: p.city,
          code: p.property_id,
        }));
        setAvailableProperties(formatted);
      })
      .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

  const propertiesFiltered = useMemo(() => {
    return availableProperties.filter((imobil) => {
      return (
        (filter.tip === "" || imobil.tip === filter.tip) &&
        (filter.zona === "" || imobil.zona === filter.zona) &&
        (filter.oras === "" || imobil.oras === filter.oras) &&
        imobil.surface >= filter.suprafataMin
      );
    });
  }, [filter, availableProperties]);

  return (
    <>
      <RealEstateFilter filter={filter} setFilter={setFilter} />
      <RealEstateList properties={propertiesFiltered} />
    </>
  );
};
