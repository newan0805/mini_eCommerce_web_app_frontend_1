import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Login from "./components/Auth/Login";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import { AlertProvider } from "./context/AlertContext";
import AlertCard from "./components/Alerts/AlertCard";
import SignUp from "./components/Auth/SignUp";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AlertProvider>
      <Router>
        <AppBar position="static" color="white">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">E-Commerce</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" href="/products">
                Products
              </Button>
              <Button color="inherit" href="/cart">
                Cart
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box mt={2} sx={{ padding: 2 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </Router>
      <AlertCard />
    </AlertProvider>
  );
};

export default App;
