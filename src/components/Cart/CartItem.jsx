import React, { useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Divider,
  Grid,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import CartContext from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={2}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{ width: "100%", borderRadius: 1 }}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="body1" color="primary">
              ${item.price.toFixed(2)}
            </Typography>
          </Grid>

          <Grid item xs={3} display="flex" alignItems="center">
            <IconButton size="small" onClick={handleDecrease}>
              <Remove />
            </IconButton>
            <TextField
              size="small"
              value={item.quantity}
              variant="outlined"
              sx={{ width: 50, mx: 1 }}
              inputProps={{
                style: { textAlign: "center" },
                readOnly: true,
              }}
            />
            <IconButton size="small" onClick={handleIncrease}>
              <Add />
            </IconButton>
          </Grid>

          <Grid item xs={1}>
            <IconButton size="small" color="error" onClick={handleRemove}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default CartItem;
