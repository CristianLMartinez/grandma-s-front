import { useEffect, useState } from "react";
import { Product } from "../product/schema/Product";
import { getProducts } from "../product/service/productService";
import ProductList from "../order/components/ProductList";
import ProductFilter from "../order/components/ProductFilter";
import OrderForm from "../order/components/OrderForm";
import { Typography } from "@mui/material";



const Order = () => {


  return (
    <>
      <h1>Order</h1>

      <Typography variant="h6" sx={{paddingBottom: 3}}>
        Create a new order
      </Typography>

      {/* <ProductList /> */}

      {/* <ProductFilter /> */}

      <OrderForm />

    </>
  );
};

export default Order;
