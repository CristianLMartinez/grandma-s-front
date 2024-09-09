import { Button, Container, Typography } from "@mui/material";

import BasicDrawer from "../component/BasicDrawer";
import RegisterClientForm from "../client/components/RegisterClientForm";
import ClientTable from "../client/components/ClienTable";
import React from "react";
import { Add } from "@mui/icons-material";

const Client = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ paddingTop: 7 }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "right",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Clients
          </Typography>

          <Button
            onClick={toggleDrawer(true)}
            variant="contained"
            color="primary"
            endIcon={<Add />}
          >
            Add
          </Button>
        </Container>

        <BasicDrawer
          open={open}
          setOpen={setOpen}
          description="Register a new client"
          children={<RegisterClientForm />}
        />
        <ClientTable />
      </Container>
    </>
  );
};

export default Client;
