import React from "react";
import "./FAQ.css";
import MainFAQ from "../../Components/MainFAQ/MainFAQ";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Sidebar/Sidebar";

export default function FAQ() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content-area">
        <Header />
        <MainFAQ />
        <Footer />
      </div>
    </div>
  );
}
