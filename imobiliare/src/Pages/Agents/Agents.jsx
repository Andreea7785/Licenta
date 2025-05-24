import Header from "../../Components/Header/Header.jsx";
import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import MainAgents from "../../Components/MainAgents/MainAgents.jsx";
import "./Agents.css";

export default function Agents() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <MainAgents />
        <Footer />
      </div>
    </div>
  );
}
