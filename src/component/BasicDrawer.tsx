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
  description: string;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const BasicDrawer = ({ children, description, open, setOpen }: Props) => {

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <div>
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
