import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";

const HeroTest = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default", // Color de fondo según el tema
        }}
      >
        <Navbar />
        <Container
          maxWidth="xl"
          sx={{
            textAlign: "left",
          }}
        >
          <Typography
            variant="h1"
            color="primary.main"
            sx={{
              fontWeight: 650,
              fontSize: { xs: "h3.fontSize", sm: "h2.fontSize", md: "h1.fontSize" },
              marginBottom: 2,
            }}
          >
            GRANDMA'S FOOD
          </Typography>
          <Typography
            color="primary.main"
            variant="body1"
            sx={{
              fontSize: { xs: "body2.fontSize", sm: "body1.fontSize", md: "h6.fontSize" },
              marginBottom: 4,
              paddingX: { xs: 1, sm: 1, md: 1 },
            }}
          >
            Una cadena de restaurantes por toda Colombia
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontWeight: "bold", borderRadius: 2 }}
          >
            Ordenar
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default HeroTest;
