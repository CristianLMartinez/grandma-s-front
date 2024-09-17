import { useEffect, useState } from "react";
import { Product } from "../../product/schema/Product";
import { searchProductBy } from "../../product/service/productService";
import { TextField, Box, Typography, Button, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

const ProductFilter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [q, setQ] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (q!.trim() === "") {
        setProducts([]);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await searchProductBy(q!);
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [q]);

  return (
    <>
      <TextField
        label="Search product: "
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      {loading && <Typography>Loading...</Typography>}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && products.length === 0 && (
        <Typography>No products found</Typography>
      )}

      <Box mt={2}>
        {products.map((product) => (
          <Box key={product.uuid} sx={{ marginBottom: 2, display: "flex", justifyContent: "space-between", border: "1px solid", padding: 1, width: { sm: "100%", md: "50%", lg: "30%" } }}>
            <Button sx={{ display: "flex", flexDirection: "column", alignContent: "start", justifyContent: "start", textAlign: "left" }}>
              <Typography variant="h6">{product.fantasyName}</Typography>
              <Typography variant="body2">price: {product.price}</Typography>
            </Button>
            <IconButton>
              <Add />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductFilter;
