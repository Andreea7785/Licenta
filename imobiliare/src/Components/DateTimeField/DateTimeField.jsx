import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DateTimeField() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 300 }}>
        <DateTimePicker
          label="Data și ora"
          value={value}
          onChange={(newValue) => setValue(newValue)}
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
