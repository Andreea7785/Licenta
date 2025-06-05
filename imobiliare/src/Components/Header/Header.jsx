import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="header">
      <div className="header-title">HomeDeal</div>
      <div className="header-right">
        <div className="header-search">
          <img
            src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
            alt="icon search"
            className="icon-search"
          />
          <input
            type="text"
            name="search"
            id="id"
            placeholder="Caută imobiliare"
          />
        </div>

        <div className="profile-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
            alt="Profile"
            className="profile-image"
          />

          <button onClick={toggleMenu} className="arrow-button">
            &#8595;
          </button>

          {isOpen && (
            <div className="options">
              <ul>
                <li>Informații cont</li>
                <li><a href="/proprietati-favorite">Proprietăți favorite</a></li>
                <li>Istoric vizionări</li>
                <li>Documente încărcate</li>
                <li>Istoric cumpărări</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
