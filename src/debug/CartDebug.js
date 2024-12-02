import React from "react";
import { useSelector } from "react-redux";

const CartDebug = () => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("Current Cart State:", cartItems);
  return null;
};

export default CartDebug;
