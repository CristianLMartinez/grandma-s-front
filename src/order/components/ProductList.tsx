import { useEffect, useState } from "react";
import { Product } from "../../product/schema/Product";
import Grid  from "@mui/material/Grid2";
import ProductCard from "./ProductCard";

import { getProducts } from "../../product/service/productService";



const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Debe iniciar en true para mostrar la carga

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError("Failed to fetch Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid key={product.uuid} size={{ xs: 2, sm: 4, md: 4 }}>
            <ProductCard title={product.fantasyName} key={product.uuid} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProductList;