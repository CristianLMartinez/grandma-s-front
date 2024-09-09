import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer"; // Cambiado de Modal a Drawer
import Container from "@mui/material/Container";
import Add from "@mui/icons-material/Add";

const drawerStyle = {
  width: 600,
  p: 4,
};

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  caption: React.ReactNode;
};

const BasicDrawer = ({ children, title, description, caption }: Props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <div>
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
          {title}
        </Typography>
        <Button
          onClick={toggleDrawer(true)}
          variant="contained"
          color="primary"
          endIcon={<Add />}
        >
          {caption}
        </Button>
      </Container>

      <Drawer
        anchor="right" 
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box sx={drawerStyle}>
          <Typography id="drawer-title" variant="h6" component="h2">
            {description}
          </Typography>
          {children}
        </Box>
      </Drawer>
    </div>
  );
};

export default BasicDrawer;
