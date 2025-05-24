import React from "react";
import "./AboutUs.css";
import MainAboutUs from "../../Components/MainAboutUs/MainAboutUs";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Sidebar/Sidebar";

export default function AboutUs() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content-area">
        <Header />
        <MainAboutUs />
        <Footer />
      </div>
    </div>
  );
}
