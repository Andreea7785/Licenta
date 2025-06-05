import Header from "../../Components/Header/Header.jsx";
import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import "./Home.css";
import { RealEstateBanner } from "../../Components/RealEstateBanner/RealEstateBanner.jsx";
import { RealEstateList } from "../../Components/RealEstateList/RealEstateList.jsx";
import LatestProperties from "../../Components/LatestProperties/LatestProperties.jsx";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <RealEstateBanner />
        <LatestProperties />
        <Footer />
      </div>
    </div>
  );
}
