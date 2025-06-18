import React, { useState } from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const userId = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).id
    : null;

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
        {userId ? (
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
                  <li>
                    <a href="/informatii-cont">Informații cont</a>
                  </li>
                  <li>
                    <a href="/proprietati-favorite">Proprietăți favorite</a>
                  </li>
                  <li>
                    <a href="/istoric">Istoric</a>
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <a href="/login" className="login-btn">
            Autentifica-te <FiLogIn />
          </a>
        )}
      </div>
    </div>
  );
}
