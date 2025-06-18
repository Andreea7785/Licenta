import React from "react";
import Header from "../../Components/Header/Header.jsx";
import SidebarAgent from "../../Components/SidebarAgent/SidebarAgent.jsx";
import FooterAgent from "../../Components/FooterAgent/FooterAgent.jsx";
import AddPropertyMain from "../../Components/AddPropertyMain/AddPropertyMain.jsx";

export default function AddProperty() {
  return (
    <div className="layout">
      <SidebarAgent />
      <div className="content-area">
        <Header />
        <AddPropertyMain />
        <FooterAgent />
      </div>
    </div>
  );
}
