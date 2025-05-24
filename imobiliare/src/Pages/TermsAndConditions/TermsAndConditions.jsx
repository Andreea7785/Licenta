import React from "react";
import "./TermsAndConditions.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Sidebar/Sidebar";
import MainTermsAndConditions from "../../Components/MainTermsAndConditions/MainTermsAndconditions";

export default function TermsAndConditions() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content-area">
        <Header />
        <MainTermsAndConditions />
        <Footer />
      </div>
    </div>
  );
}
