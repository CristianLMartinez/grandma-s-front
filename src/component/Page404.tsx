import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Asumiendo que usas React Router

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "background.default",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ fontSize: 'h1.fontSize ', fontWeight: "bold" }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: 1, fontSize: { xs: "body1.fontSize", md: "h6.fontSize" } }}
        >
          ¡Oops! No pudimos encontrar la página que buscabas.
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{ marginBottom: 4 }}
        >
          Es posible que la dirección esté incorrecta o que la página ya no exista.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGoHome}
          sx={{ fontWeight: "bold", borderRadius: 2 }}
        >
          Volver al Inicio
        </Button>
      </Container>
    </Box>
  );
};

export default Page404;
