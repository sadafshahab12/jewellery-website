import React from "react";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
