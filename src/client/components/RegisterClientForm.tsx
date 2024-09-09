import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Box,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { schema, Client, DocumentType } from "../schema/Client";
import { registerClient, updateClient } from "../service/clientService";

const RegisterClientForm = ({
  client,
  onEditSuccess,
}: {
  client?: Client;
  onEditSuccess?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Client>({
    resolver: zodResolver(schema),
    defaultValues: client,
  });

  const [documentType, setDocumentType] = useState<DocumentType>(
    DocumentType.CC
  );
  const [documentNumber, setDocumentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    if(client) {
      const [type, number] = client.document.split("-");
      setDocumentType(type as DocumentType);
      setDocumentNumber(number);
      setPhone(client.phone);
    }
    setValue("document", `${documentType}-${documentNumber}`);
  }, [documentType, documentNumber, setValue]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Elimina todos los caracteres no numéricos
    if (value.length > 3) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    }
    register("phone").onChange({ target: { value } });
    setPhone(value);
  };

  const onSubmit = async (data: Client) => {
    try {
      if (client) {
        await updateClient(data.document, data); // Utiliza el endpoint de actualización
        setSnackbarMessage(`Client updated with document: ${data.document}`);
      } else {
        await registerClient(data);
        setSnackbarMessage(`Client registered with document: ${data.document}`);
      }
      setSnackbarSeverity("success");
      onEditSuccess?.();
    } catch (error: any) {
      setSnackbarMessage(
        error.response?.data?.description || "An error occurred."
      );
      setSnackbarSeverity("error");
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Cerrar el snackbar
  };

  return (
    <Container maxWidth="sm">
      {/* Snackbar para las notificaciones */}

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="documentType-label">Document Type</InputLabel>
              <Select
                labelId="documentType-label"
                label="Document Type"
                value={documentType}
                onChange={(e) =>
                  setDocumentType(e.target.value as DocumentType)
                }
                error={!!errors.document}
              >
                {Object.values(DocumentType).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 9 }}>
            <TextField
              label="Document Number"
              type="number"
              disabled={client !== undefined}
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              error={!!errors.document}
              helperText={errors.document?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <input type="hidden" {...register("document")} />

        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Phone"
          type="tel"
          value={phone}
          {...register("phone")}
          onChange={handlePhoneChange}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Delivery Address"
          {...register("deliveryAddress")}
          error={!!errors.deliveryAddress}
          helperText={errors.deliveryAddress?.message}
          variant="outlined"
          fullWidth
          multiline
          minRows={3}
        />

        <Button type="submit" variant="contained" color="primary" size="large">
          {client ? "Update Client" : "Create Cliente"}
        </Button>
        <Snackbar
          sx={{ width: "100%", marginBottom: 20 }}
          open={snackbarOpen}
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
      {/* Snackbar para las notificaciones */}
    </Container>
  );
};

export default RegisterClientForm;
