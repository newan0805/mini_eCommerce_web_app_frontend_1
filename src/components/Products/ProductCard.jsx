import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductCard = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartt = () => {
    handleAddToCart({ ...product, quantity });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Box p={1}>
          <IconButton onClick={decreaseQuantity} color="primary">
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1 }}
            style={{ width: "50px", textAlign: "center" }}
            variant="outlined"
            size="small"
          />
          <IconButton onClick={increaseQuantity} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
        <Button variant="contained" onClick={handleAddToCartt}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
