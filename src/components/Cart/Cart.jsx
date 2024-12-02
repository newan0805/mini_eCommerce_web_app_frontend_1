import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAlert } from "../../context/AlertContext";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { triggerAlert } = useAlert();

  const handleRemove = (id) => {
    triggerAlert({
      type: "error",
      title: "Product Removed",
      description: `${id} has been added to your cart.`,
      onConfirm: () => dispatch(removeItem(id)),
    });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Box padding={4}>
      <Typography variant="h3" gutterBottom>
        Shopping Cart
      </Typography>
      {items.length === 0 ? (
        <Typography variant="h5">Your cart is empty!</Typography>
      ) : (
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      ${item.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      size="small"
                      inputProps={{ min: 1 }}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      color="secondary"
                      onClick={() => handleRemove(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h5" textAlign="right">
              Total: $
              {items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
