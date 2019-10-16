import React from "react";
import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import RegistedUserNav from "../components/RegistedUserNav";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Routes from "../../../Routes";

export default props => {
  return (
    <Container maxWidth="lg">
      <RegistedUserNav />
      <Grid container spacing={0}>
        <Grid item lg={3} md={3}>
          <Box
            display={{
              xs: "none",
              md: "block",
              lg: "block"
            }}
            style={{
              padding: 25,
              backgroundImage: `url(https://i.imgur.com/okouGrD.png)`,
              backgroundPosition: "right",
              height: "70vh",
              backgroundColor: "white"
            }}
          >
            <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>
                <ArrowBackIosIcon />
                Accueil
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs lg={9} md={9}>
          <Box
            display="flex"
            alignItems="center"
            css={{ height: "70vh", marginTop: 25 }}
          >
            <Box
              style={{
                padding: 25,
                backgroundColor: "white",
                width: "100%",
                height: "100%"
              }}
            >
              <div className="fade-in-fwd">
                <Typography
                  variant="h4"
                  style={{
                    color: "#004080",
                    fontWeight: "bold",
                    marginBottom: 15
                  }}
                >
                  Renseignements
                </Typography>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box justifyContent="center">
                    <CheckCircleIcon
                      style={{ color: "#02B875", fontSize: 100 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ color: "#004080", fontSize: 15 }}
                >
                  Bravo ! Vous venez de terminé l'étape n°1, <br />
                  il ne vous reste plus que <strong>trois</strong> étapes pour
                  terminer votre inscription !
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Link
                    to={Routes.DASHBOARD}
                    style={{ textDecoration: "none", marginRight: 15 }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{
                        color: "#004080",
                        fontWeight: "bold",
                        borderColor: "#004080",
                        marginTop: 25
                      }}
                    >
                      Poursuivre plus tard
                    </Button>
                  </Link>
                  <Link
                    to={Routes.CURRENT_SITUATION}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        marginTop: 25,
                        color: "white",
                        backgroundColor: "#004080"
                      }}
                    >
                      Poursuivre l'inscription
                    </Button>
                  </Link>
                </Box>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
