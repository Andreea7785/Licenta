import React, { useState } from "react";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { useChat } from "../../context/ChatContext";

const ChatIconMenu = () => {
  const { conversations, unreadCounts, openChatWith, user } = useChat();
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(unreadCounts);
  const totalUnread = Object.values(unreadCounts).reduce(
    (sum, c) => sum + c,
    0
  );
  console.log(unreadCounts);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelectChat = (userId) => {
    openChatWith(userId);
    handleClose();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={totalUnread} color="error">
          <MessageIcon sx={{ color: "white", width: "unset", height: "80" }} />
        </Badge>
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {conversations.length === 0 && (
          <MenuItem disabled>Nu există conversații</MenuItem>
        )}
        {conversations.map((conv) =>
          conv.id != user.id ? (
            <MenuItem
              key={conv.id}
              onClick={() => handleSelectChat(conv.id)}
              sx={{ minWidth: "400px" }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={`User ${conv.id}`}
                secondary={conv.lastMessage?.slice(0, 40)}
              />
              {unreadCounts[conv.id] > 0 && (
                <Badge
                  badgeContent={unreadCounts[conv.id]}
                  color="error"
                  sx={{ ml: 1 }}
                />
              )}
            </MenuItem>
          ) : null
        )}
      </Menu>
    </>
  );
};

export default ChatIconMenu;
