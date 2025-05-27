import Header from "../../Components/Header/Header.jsx";
import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import "./Home.css";
import { RealEstateBanner } from "../../Components/RealEstateBanner/RealEstateBanner.jsx";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList.jsx";
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

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <RealEstateBanner />
        <h2>Cele mai noi prorprietăți</h2>
        <RealEstateList properties={properties.slice(0, 4)} />
        <Footer />
      </div>
    </div>
  );
}
