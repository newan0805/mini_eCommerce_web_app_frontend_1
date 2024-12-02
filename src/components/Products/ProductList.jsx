import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { selectProducts } from "../../redux/slices/productSlice";
import { useAlert } from "../../context/AlertContext";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const { triggerAlert } = useAlert();

  const handleAddToCart = (product) => {
    triggerAlert({
      type: "success",
      title: "Product Added",
      description: `${product.name} has been added to your cart.`,
      onConfirm: () => dispatch(addItem(product)),
    });
  };

  return (
    <Box padding={4}>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              product={product}
              handleAddToCart={() => handleAddToCart(product)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
