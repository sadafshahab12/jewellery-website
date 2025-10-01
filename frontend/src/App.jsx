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

          {/* ✅ Payment success page */}
          <Route
            path="/payment-success"
            element={
              <h2 className="p-6 text-green-600 font-bold">
                Payment Successful 🎉
              </h2>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
