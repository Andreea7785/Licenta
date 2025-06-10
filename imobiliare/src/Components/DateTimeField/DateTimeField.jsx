import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateTimeField({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 300 }}>
        <DateTimePicker
          label="Data și ora"
          value={value}
          onChange={onChange}
          DialogProps={{
            PaperProps: {
              sx: { maxWidth: 400, width: "90%" },
            },
          }}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Box>
    </LocalizationProvider>
  );
}
