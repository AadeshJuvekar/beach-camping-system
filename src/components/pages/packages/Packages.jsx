import * as React from "react";
import "./packages.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

const tiers = [
  {
    title: "Standard",
    price: "1299",
    description: [
      "Welcome Drink🍹",
      "Tent Stay🎪",
      "Breakfast🍳",
      "Music System🎵",
      "Games & Group Activities 🎤",
      "Unlimited Food🥘(non-veg/veg)",
      "Bonfire🔥",
      "BBQ🍗",
      "Washrooms Available🚻",
      "24/7 Care Taker👨🏻",
    ],
    buttonText: "BOOK NOW",
  },
  {
    title: "Premium",
    price: "1999",
    description: [
      "Welcome Drink🍹",
      "Tent Stay with proper bedding 🎪",
      "Breakfast🍳",
      "Music System🎵",
      "Games & Group Activities 🎤",
      "Unlimited Food🥘(non-veg/veg)",
      "Bonfire🔥",
      "Evening Snacks",
      "Unlimited BBQ🍗",
      "Movie night",
      "Washrooms Available🚻",
      "24/7 Care Taker👨🏻",
    ],
    buttonText: "BOOK NOW",
  },
];

function Packages() {
  return (
    <div className="packages" id="packages">
      <div className="packagesContainer">
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />

        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            className="packagesTitle"
            gutterBottom
          >
            Packages
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
            className="packagesDescription"
          >
            <p>
              Sometimes all you need is a warm bonfire and soft roaring waves
              crashing on the beach while you fall asleep closer to nature. And
              sometimes all you need is a Beach Camping. Yes, you heard us
              right!
            </p>
            <p>
              Camping isn’t always done into the jungle or in the mountains or
              grasslands; it doesn’t always involve you into encountering a wild
              animal. Beach camping can be as exhilarating as any other camping,
              but the amount of fun and the memories you make when you camp on
              the beach is altogether a different experience.
            </p>
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Premium" ? 12 : 6}
                md={6}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: "center" }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h4"
                        color="text.primary"
                      >
                        ₹{tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /person
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained">
                      <NavLink
                        to="/api/register"
                        style={{ textDecoration: "inherit", color: "inherit" }}
                      >
                        {tier.buttonText}
                      </NavLink>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default Packages;
