import { useMemo, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { RealEstateFilter } from "../../Components/RealEstateFilter/RealEstateFilter";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import imagePath from "../../assets/image.png";

export const properties = [
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 44,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 45,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 90,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 89,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 56,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 23,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 10,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 25,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
  {
    id: 1,
    title: "Apartament 2 camere de vanzare",
    location: "Alexandru cel Bun, Iasi",
    price: "64.800 EUR",
    surface: 39,
    rooms: 2,
    bathrooms: 1,
    image: imagePath,
    rating: 5,
    code: "53007",
  },
];

export const AvailableProperties = () => {
  const [availableProperties, _] = useState(properties);

  const [filter, setFilter] = useState({
    tip: "",
    zona: "",
    suprafataMin: 0,
    oras: "",
  });

  const propertiesFiltered = useMemo(() => {
    return availableProperties.filter((imobil) => {
      return (
        (filter.tip === "" || imobil.tip === filter.tip) &&
        (filter.zona === "" || imobil.zona === filter.zona) &&
        (filter.oras === "" || imobil.oras === filter.oras)
      );
    });
  }, [filter]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <RealEstateFilter filter={filter} setFilter={setFilter} />
        <RealEstateList properties={propertiesFiltered} />
        <Footer />
      </div>
    </div>
  );
};
