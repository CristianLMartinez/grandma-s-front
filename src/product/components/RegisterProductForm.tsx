import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Box,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import { Product, schema } from "../schema/Product";
import { registerProduct, updateProduct } from "../service/productService";

const RegisterProductForm = ({
  product,
  onEditSuccess,
}: {
  product?: Product;
  onEditSuccess?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(schema),
    defaultValues: product,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const onSubmit = async (data: Product) => {
    console.info(data)
    try {
      if (product) {
        await updateProduct(data.uuid, data);
        setSnackbarMessage(`Client updated with fantasy name: ${data.fantasyName}`);
      } else {
        console.info(data)
        await registerProduct(data);
        setSnackbarMessage(`Client registered with fantasy name: ${data.fantasyName}`);
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

        <input type="hidden" {...register("uuid")} />

        <TextField
          label="Fantasy Name"
          {...register("fantasyName")}
          error={!!errors.fantasyName}
          helperText={errors.fantasyName?.message}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Category"
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
          variant="outlined"
          fullWidth
        />


        <TextField
          label="Price"
          type="number"
          {...register("price")}
          error={!!errors.price}
          helperText={errors.price?.message}
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
          variant="outlined"
          fullWidth
          multiline
          minRows={3}
        />

        <Button type="submit" variant="contained" color="primary" size="large">
          {product ? "update product" : "create product"}
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

export default RegisterProductForm;
