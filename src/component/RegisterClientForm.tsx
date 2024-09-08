import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,  
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { schema, Client, DocumentType } from "../schemas/Client";
import { registerClient } from "../service/clientService";
const RegisterClientForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Client>({
    resolver: zodResolver(schema),
  });

  const [documentType, setDocumentType] = useState<DocumentType>(DocumentType.CC);
  const [documentNumber, setDocumentNumber] = useState("");


  useEffect(() => {
    setValue("document", `${documentType}-${documentNumber}`);
  }, [documentType, documentNumber, setValue]);

  const onSubmit = async (data: Client) => {
    try {
      await registerClient(data);
      alert("Client registered successfully!");
    } catch (error) {
      alert("Failed to register client.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h4" component="h1" align="center">
          Registrar Cliente
        </Typography>

        <Grid container spacing={2}>
          {/* Select para tipo de documento */}
          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel id="documentType-label">Document Type</InputLabel>
              <Select
                labelId="documentType-label"
                label="Document Type"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value as DocumentType)}
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

          {/* Input para el número del documento */}
          <Grid  size={6}>
            <TextField
              label="Document Number"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              error={!!errors.document}
              helperText={errors.document?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Campo oculto que contiene el valor completo del documento */}
        <input type="hidden" {...register("document")} />

        {/* Otros campos del formulario */}
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
          {...register("phone")}
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
          Registrar Cliente
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterClientForm;