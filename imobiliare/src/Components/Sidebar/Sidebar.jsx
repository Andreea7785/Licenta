import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import InfoIcon from "@mui/icons-material/Info";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo-menu">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="navigation">
          <div className="home">
            <InfoIcon className="icon-info" />
            <a href="/home" rel="noopener noreferrer">
              Home
            </a>
          </div>

          <div className="aboutus box-sizing-unset">
            <GroupsIcon className="icon-aboutus" />
            <a href="/despre-noi" rel="noopener noreferrer">
              Despre noi
            </a>
          </div>

          <div className="agent box-sizing-unset">
            <PersonIcon className="icon-agent" />
            <a href="/agenti-imobiliari" rel="noopener noreferrer">
              Agenți imobiliari
            </a>
          </div>

          <div className="realestate box-sizing-unset">
            <HomeWorkIcon className="icon-realestate" />
            <a href="/proprietati-disponibile" rel="noopener noreferrer">
              Proprietăți disponibile
            </a>
          </div>

          <div className="form box-sizing-unset">
            <AssignmentIcon className="icon-form" />
            <a href="/Formular" rel="noopener noreferrer">
              Spune-ne ce cauți
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
