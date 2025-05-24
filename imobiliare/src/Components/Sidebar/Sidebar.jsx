import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import info from "../../assets/info.png";
import aboutus from "../../assets/aboutus.png";
import form from "../../assets/form.png";
import realestate from "../../assets/realestate.png";
import agent from "../../assets/agent.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo-menu">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="navigation">
          <div className="home">
            <img src={info} alt="icon-info" className="icon-info" />
            <a href="/home" rel="noopener noreferrer">
              Home
            </a>
          </div>
          <div className="aboutus box-sizing-unset">
            <img src={aboutus} alt="icon-aboutus" className="icon-aboutus" />
            <a href="/despre-noi" rel="noopener noreferrer">
              Despre noi
            </a>
          </div>

          <div className="agent box-sizing-unset">
            <img src={agent} alt="icon-agent" className="icon-agent" />
            <a href="/agenti-imobiliari" rel="noopener noreferrer">
              Agenți imobiliari
            </a>
          </div>

          <div className="realestate box-sizing-unset">
            <img
              src={realestate}
              alt="icon-realestate"
              className="icon-realestate"
            />
            <a href="/proprietati-disponibile" rel="noopener noreferrer">
              Proprietăți disponibile
            </a>
          </div>

          <div className="form box-sizing-unset">
            <img src={form} alt="icon-form" className="icon-form" />
            <a href="/Formular" rel="noopener noreferrer">
              Spune-ne ce cauți
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
