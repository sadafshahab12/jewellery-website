import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart(); // ✅ ab provider ke andar hoga
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Israr Jewelry</h1>
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cart.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}
