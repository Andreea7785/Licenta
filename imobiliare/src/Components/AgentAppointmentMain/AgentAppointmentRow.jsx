import { useState } from "react";
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
  Modal,
  Grid,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { PersonalInformations } from "../PersonalInformations/PersonalInformations";
import DateTimeField from "../DateTimeField/DateTimeField";
import dayjs from "dayjs";

export const AgentAppointmentRow = ({ appointment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    date: dayjs(appointment.date),
    observations: appointment.observations,
    status: appointment.status,
  });

  const options = [
    { value: "Trimis", label: "In asteptare" },
    { value: "approved", label: "Aprobata" },
  ];

  return (
    <>
      <TableRow
        sx={{
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <TableCell>
          <Link
            to={`/property/${appointment.property.property_id}`}
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
            {appointment.property.title}
          </Link>
        </TableCell>
        <TableCell>
          {new Date(appointment.date).toLocaleString("ro-RO")}
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ color: "green", fontWeight: 500 }}>
            {appointment.status}
          </Typography>
        </TableCell>
        <TableCell>{appointment.observations}</TableCell>
        <TableCell>
          <button onClick={() => setIsOpen(true)}>
            <EditIcon />
          </button>
        </TableCell>
      </TableRow>
      {isOpen ? (
        <Modal
          open={open}
          onClose={() => setIsOpen(false)}
          //   sx={{ height: "800px", overflowY: "scroll" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              minWidth: 600,
              height: "600px",
              overflowY: "scroll",
            }}
          >
            <PersonalInformations
              user={appointment.client}
              showDocuments={true}
              hideTitle={true}
            />
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mt: 2 }}>
              <Typography variant="h6" marginBottom={"20px"}>
                Date programare
              </Typography>
              <Grid spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ width: 300 }}>
                    <DateTimeField
                      value={appointmentData.date}
                      onChange={(e) => {
                        e;
                        setAppointmentData((prev) => ({
                          ...prev,
                          date: e,
                        }));
                      }}
                    />
                  </Box>
                  <Box sx={{ width: 300, marginTop: 3 }}>
                    <FormControl sx={{ width: 300 }}>
                      <InputLabel id="property-type-label">
                        Status programare
                      </InputLabel>
                      <Select
                        labelId="property-type-label"
                        id="property-type-select"
                        value={appointment.status}
                        label="Tip proprietate"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setAppointmentData((prev) => ({
                            ...prev,
                            status: e.target.value,
                          }));
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} mt={5}>
                  <TextField
                    label="Observatii"
                    fullWidth
                    name="observations"
                    value={appointmentData.observations}
                    variant="outlined"
                    onChange={(e) =>
                      setAppointmentData((prev) => ({
                        ...prev,
                        observations: e.target.value,
                      }))
                    }
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button
                sx={{ background: "black", color: "white" }}
                variant="outlined"
                onClick={() => setIsOpen(false)}
              >
                Anulează
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => console.log("test")}
              >
                Salveaza
              </Button>
            </Box>
          </Box>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};
