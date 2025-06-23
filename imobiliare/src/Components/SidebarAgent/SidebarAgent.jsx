import React from "react";
import "./SidebarAgent.css";
import logo from "../../assets/logo.png";
import {
  InfoOutlined,
  ListAltOutlined,
  PeopleAltOutlined,
  EventNoteOutlined,
  HistoryEduOutlined,
  CloudUploadOutlined,
  InsertChartOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

export default function SidebarAgent() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo-menu">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="navigation">
          <a href="/rapoarte-firma" className="nav-item">
            <InfoOutlined className="icon" />
            <span>Rapoartele firmei</span>
          </a>
          <a href="/proprietati-incarcate" className="nav-item">
            <ListAltOutlined className="icon" />
            <span>Proprietățile mele</span>
          </a>
          <a href="/vizionari" className="nav-item">
            <EventNoteOutlined className="icon" />
            <span>Programări vizionări</span>
          </a>
          <a href="/istoric-vanzari" className="nav-item">
            <HistoryEduOutlined className="icon" />
            <span>Istoric vânzări</span>
          </a>
          <a href="/incarca-proprietate" className="nav-item">
            <CloudUploadOutlined className="icon" />
            <span>Încarcă proprietate</span>
          </a>
          <a href="/rapoartele-mele" className="nav-item">
            <InsertChartOutlined className="icon" />
            <span>Rapoartele mele</span>
          </a>
        </div>
      </div>
    </div>
  );
}
