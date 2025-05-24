import React from "react";
import "./PrivacyPolicy.css";
import MainPrivacyAndPolicy from "../../Components/MainPrivacyAndPolicy/MainPrivacyAndPolicy";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Sidebar/Sidebar";

export default function PrivacyPolicy() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content-area">
        <Header />
        <MainPrivacyAndPolicy />
        <Footer />
      </div>
    </div>
  );
}
