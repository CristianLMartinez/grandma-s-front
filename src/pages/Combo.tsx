import React from "react";
import ProductTable from "../product/components/ProducTable";
import { Button, Container, Typography } from "@mui/material";
import BasicDrawer from "../component/BasicDrawer";
import RegisterProductForm from "../product/components/RegisterProductForm";
import { Add } from "@mui/icons-material";

const Combo = () => {
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
            Products
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
          description="Register a new produc"
          children={<RegisterProductForm />}
        />
        <ProductTable />
      </Container>
    </>
  )
}

export default Combo;