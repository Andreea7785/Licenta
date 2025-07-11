import { useEffect, useMemo, useState } from "react";
import RealEstateFilter from "../../Components/RealEstateFilter/RealEstateFilter.jsx";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList";
import { formatPropertyObject } from "../../utils/utils.jsx";

export const AvailablePropMain = () => {
  const [availableProperties, setAvailableProperties] = useState([]);
  const [agents, setAgents] = useState([]);
  const [zones, setZones] = useState([]);

  const [filter, setFilter] = useState({
    tip: "",
    suprafata: "",
    pret: "",
    camere: "",
    agent: "",
    zona: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => formatPropertyObject(p));
        setAvailableProperties(formatted);

        const uniqueZones = [...new Set(data.map((p) => p.area))];
        setZones(uniqueZones);
      })
      .catch((err) => console.error("Eroare la fetch proprietăți:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(data);
      })
      .catch((err) => console.error("Eroare la fetch agenți:", err));
  }, []);

  const propertiesFiltered = useMemo(() => {
    return availableProperties.filter((imobil) => {
      const tipOk =
        filter.tip === "" ||
        imobil.tip?.toLowerCase() === filter.tip.toLowerCase();

      const surfaceOk =
        filter.suprafata === "" ||
        (filter.suprafata === "sub50" && imobil.surface < 50) ||
        (filter.suprafata === "intre50-100" &&
          imobil.surface >= 50 &&
          imobil.surface <= 100) ||
        (filter.suprafata === "peste100" && imobil.surface > 100);

      const priceNumber = parseInt(imobil.price.replace(/\D/g, ""));
      const priceOk =
        filter.pret === "" ||
        (filter.pret === "sub50000" && priceNumber < 50000) ||
        (filter.pret === "intre50-100" &&
          priceNumber >= 50000 &&
          priceNumber <= 100000) ||
        (filter.pret === "intre100-150" &&
          priceNumber >= 100000 &&
          priceNumber <= 150000) ||
        (filter.pret === "peste150" && priceNumber > 150000);

      const camereOk =
        filter.camere === "" ||
        (filter.camere === "4plus" && imobil.rooms >= 4) ||
        imobil.rooms === Number(filter.camere);

      const agentOk =
        filter.agent === "" ||
        imobil.agent?.toLowerCase().trim() ===
          filter.agent.toLowerCase().trim();

      const zonaOk = filter.zona === "" || imobil.zona === filter.zona;

      return tipOk && zonaOk && surfaceOk && priceOk && camereOk && agentOk;
    });
  }, [filter, availableProperties]);

  return (
    <>
      <RealEstateFilter
        filter={filter}
        setFilter={setFilter}
        agents={agents}
        zones={zones}
      />
      <RealEstateList properties={propertiesFiltered} />
    </>
  );
};
