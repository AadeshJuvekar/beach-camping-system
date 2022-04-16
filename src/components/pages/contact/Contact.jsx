import React from "react";
import "./contact.css";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Contact() {
  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    window.alert("Registration Succesful");
=======
    window.alert("Sent Succesfully");
>>>>>>> e3454e198b5c47bbbcd04bd5fcb82b397fd1568c
  };
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
<<<<<<< HEAD
              <Typography component="h1" variant="h4">
=======
              <Typography component="h1" variant="h4" className="contactTitle">
>>>>>>> e3454e198b5c47bbbcd04bd5fcb82b397fd1568c
                Enquire Now
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phoneNumber"
                      label="Phone Number"
                      name="phoneNumber"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      label="Message"
                      name="message"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  SEND
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
<<<<<<< HEAD
=======
        <div className="contactEnd"></div>
>>>>>>> e3454e198b5c47bbbcd04bd5fcb82b397fd1568c
      </div>
    </div>
  );
}

export default Contact;
