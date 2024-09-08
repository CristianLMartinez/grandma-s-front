import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Container, Divider } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "left",
        }}
      >
        <Navbar />
        <Divider sx={{ marginTop: 5 }} />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
