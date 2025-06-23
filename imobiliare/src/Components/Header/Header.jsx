import React, { useState } from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { Box, Avatar } from "@mui/material";
import ChatIconMenu from "../ChatIconMenu/ChatIconMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const userRole = user?.role;

  return (
    <div className="header">
      <div className="header-title">HomeDeal</div>
      <div className="header-right">
        {userId ? (
          <div className="profile-container">
            <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
              <Avatar
                sx={{
                  bgcolor: "#fff",
                  color: "#002147",
                  border: "2px solid #002147",
                  width: 40,
                  height: 40,
                  fontWeight: "bold",
                }}
              >
                {user?.firstname?.charAt(0).toUpperCase()}
              </Avatar>
            </div>

            {isOpen && (
              <div className="options">
                <ul>
                  <li>
                    <a href="/informatii-cont">Informații cont</a>
                  </li>

                  {userRole !== "agent" && (
                    <>
                      <li>
                        <a href="/proprietati-favorite">Proprietăți favorite</a>
                      </li>
                      <li>
                        <a href="/istoric">Istoric</a>
                      </li>
                    </>
                  )}

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

            <Box>
              <ChatIconMenu />
            </Box>
          </div>
        ) : (
          <a href="/login" className="login-btn">
            Autentifică-te <FiLogIn />
          </a>
        )}
      </div>
    </div>
  );
}
