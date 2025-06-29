import React, { useState } from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { Box, Avatar, Menu, MenuItem } from "@mui/material";
import ChatIconMenu from "../ChatIconMenu/ChatIconMenu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const userRole = user?.role;

  return (
    <div className="header">
      <div className="header-title">HomeDeal</div>
      <div className="header-right">
        {userId ? (
          <div className="profile-container">
            <div onClick={handleOpen} style={{ cursor: "pointer" }}>
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
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                {" "}
                <a href="/informatii-cont">Informații cont</a>
              </MenuItem>
              {userRole !== "agent" && (
                <>
                  <MenuItem>
                    <a href="/proprietati-favorite">Proprietăți favorite</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="/istoric">Istoric</a>
                  </MenuItem>
                </>
              )}
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                Logout
              </MenuItem>
            </Menu>

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
