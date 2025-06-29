import {
  Typography,
  Grid,
  TextField,
  Avatar,
  Paper,
  Divider,
  Box,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export const PersonalInformations = ({ user, showDocuments, hideTitle }) => {
  const handleDownload = () => {
    const base64Data = `data:image/jpeg;base64,${user?.document}`;
    const link = document.createElement("a");
    link.href = base64Data;
    link.setAttribute("download", "poza_profil.jpg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        {!hideTitle ? (
          <Typography variant="h5" align="center">
            Informații personale
          </Typography>
        ) : (
          <></>
        )}
        <Typography variant="h6" marginBottom={"20px"}>
          Date utilizator
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nume"
              value={user?.lastName || user?.lastname}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Prenume"
              value={user?.firstName || user?.firstname}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefon"
              value={user?.phoneNumber}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              value={user?.email}
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        {showDocuments ? (
          <>
            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
              Documentele mele
            </Typography>
            <Box mt={2}>
              <Avatar
                src={`data:image/jpeg;base64,${user?.document}`}
                alt="Poza profil"
                sx={{ width: 140, height: 140 }}
              />
              <Button
                variant="text"
                onClick={handleDownload}
                disabled={!user?.document}
              >
                <DownloadIcon />
              </Button>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Paper>
    </Box>
  );
};
