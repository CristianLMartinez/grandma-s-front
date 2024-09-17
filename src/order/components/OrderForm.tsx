import React, { useState } from "react";
import { OrderItemsDto } from "../schema/Order";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Product } from "../../product/schema/Product";
import ProductFilter from "./ProductFilter";

const OrderForm = () => {
  const [clientDocument, setClientDocument] = useState<string>("");
  const [products, setProducts] = useState<OrderItemsDto[]>([]);
  const [extraInformation, setExtraInformation] = useState<string>("");

  const handleSubmit = () => {
    const order = {
      clientDocument,
      products,
      extraInformation,
    };

    console.log("Order:", order);
  };

  return (
    <Box>
      
      <TextField
        label="Client Document"
        value={clientDocument}
        onChange={(e) => setClientDocument(e.target.value)}
        required
        fullWidth
      />

      <ProductFilter />

      <Button onClick={() => setProducts([...products, { productUuid: "", productName: "", quantity: 1 }])}>
        Add Product
      </Button>

      <TextField
        label="Extra Information"
        value={extraInformation}
        onChange={(e) => setExtraInformation(e.target.value)}
        fullWidth
        multiline
      />

      <Button onClick={handleSubmit}>Submit Order</Button>
    </Box>
  );
};

export default OrderForm;
