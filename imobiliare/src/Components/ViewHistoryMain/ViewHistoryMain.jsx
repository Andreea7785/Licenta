import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PropertyMain from "../PropertyMain/PropertyMain.jsx";

import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

const ViewHistoryMain = () => {
  const [tab, setTab] = useState(0);
  const [viewings, setViewings] = useState([]);
  7;
  const [purchases, setPurchases] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const clientId = user?.id;

    if (!clientId) return;

    fetch(`http://localhost:8080/api/appointments/client/${clientId}`)
      .then((res) => res.json())
      .then((data) => setViewings(data))
      .catch((err) => console.error("Error fetching viewings:", err));
  }, [location.pathname]); // 🔁 reapelează când se schimbă pagina

  const handleChange = (_, newValue) => setTab(newValue);
  console.log(viewings);
  viewings.forEach((v, i) => {
    console.log(`Vizionare ${i}:`, v);
  });

  return (
    <div className="content-page" style={{ minHeight: "70vh" }}>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Istoric
        </Typography>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "#5D4037" }, // indicatorul sub tab activ
          }}
        >
          <Tab
            label="Vizionări"
            sx={{
              color: tab === 0 ? "#5D4037" : "inherit",
              fontWeight: tab === 0 ? "bold" : "normal",
            }}
          />
          <Tab
            label="Cumpărări"
            sx={{
              color: tab === 1 ? "#5D4037" : "inherit",
              fontWeight: tab === 1 ? "bold" : "normal",
            }}
          />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <Table sx={{ minWidth: 650 }} aria-label="Vizionări">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Proprietate</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Data</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Observații</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {viewings.map((v, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  <TableCell>
                    <Link
                      to={`/property/${v.property.property_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "normal",
                        fontSize: "16px",
                      }}
                      onMouseOver={(e) => (e.target.style.fontWeight = "bold")}
                      onMouseOut={(e) => (e.target.style.fontWeight = "normal")}
                    >
                      {v.property.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {new Date(v.date).toLocaleString("ro-RO")}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ color: "green", fontWeight: 500 }}
                    >
                      {v.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{v.observations}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Table sx={{ minWidth: 650 }} aria-label="Cumpărări">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Proprietate</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Preț</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Data achiziției
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Metodă plată</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {purchases.map((p, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  <TableCell>
                    {p.property ? (
                      <Link
                        to={`/property/${p.property.property_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "normal",
                          fontSize: "16px",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.fontWeight = "bold")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.fontWeight = "normal")
                        }
                      >
                        {p.property.title}
                      </Link>
                    ) : (
                      <span style={{ color: "#888" }}>
                        Proprietate indisponibilă
                      </span>
                    )}
                  </TableCell>

                  <TableCell>{p.price} €</TableCell>
                  <TableCell>
                    {new Date(p.date).toLocaleDateString("ro-RO")}
                  </TableCell>
                  <TableCell>{p.paymentMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
      </Paper>
    </div>
  );
};

export default ViewHistoryMain;
