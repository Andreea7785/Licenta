import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import "./SalesHistoryMain.css";

const SalesHistoryMain = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const agentId = user?.id;

    if (!agentId) return;

    fetch(`http://localhost:8080/api/transactions/agent/${agentId}`)
      .then((res) => res.json())
      .then((data) => setSales(data))
      .catch((err) => console.error("Eroare la preluarea vânzărilor:", err));
  }, []);

  return (
    <Box className="sales-history-container">
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "25px",
          color: "#002147",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          mb: 5,
        }}
      >
        Istoric vânzări
      </Typography>

      <Paper elevation={3} className="sales-history-paper">
        <Table className="sales-history-table" aria-label="Istoric vânzări">
          <TableHead>
            <TableRow className="sales-history-header">
              <TableCell>Proprietate</TableCell>
              <TableCell>Preț</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sales.map((sale, i) => (
              <TableRow key={i} className="sales-history-row">
                <TableCell>{sale.propertyTitle}</TableCell>
                <TableCell>{sale.price.toLocaleString("ro-RO")} €</TableCell>
                <TableCell>
                  {new Date(sale.date).toLocaleDateString("ro-RO")}
                </TableCell>
                <TableCell>{sale.clientName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default SalesHistoryMain;
