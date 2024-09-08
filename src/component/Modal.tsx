import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Add from "@mui/icons-material/Add"; // Asegúrate de importar el ícono Add

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  caption: string;
};

const BasicModal = ({ children, title, description, caption }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
          variant="contained"
          color="primary"
          endIcon={<Add />}
        >
          {caption}
        </Button>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {description}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
