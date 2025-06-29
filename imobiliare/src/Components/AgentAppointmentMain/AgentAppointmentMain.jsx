import { useEffect, useState } from "react";
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
import "./AgentAppointmentMain.css";

import { AgentAppointmentRow } from "./AgentAppointmentRow";

export const AgentAppointmentsMain = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const agentId = user?.id;

    if (!agentId) return;

    fetch(`http://localhost:8080/api/appointments/agent/${agentId}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Error fetching viewings:", err));
  }, []);

  return (
    <div className="agent-appointments-container">
      <Table sx={{ minWidth: 650 }} aria-label="Vizionări">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Proprietate</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Data</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Observații</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Acțiuni</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {appointments.map((app, index) => (
            <AgentAppointmentRow appointment={app} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
