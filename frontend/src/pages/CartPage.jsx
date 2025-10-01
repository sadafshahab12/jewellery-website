import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "",
  });
  const [showCheckout, setShowCheckout] = useState(false);

  // total
  const total = cart.reduce(
    (acc, item) =>
      acc + (parseInt(item.price.replace(/\D/g, "")) || 0) * item.qty,
    0
  );

  const handleCheckout = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.payment
    ) {
      alert("Please fill all fields & select payment method");
      return;
    }

    const orderDetails = cart
      .map(
        (item) =>
          `${item.title} (x${item.qty}) - Rs ${
            (parseInt(item.price.replace(/\D/g, "")) || 0) * item.qty
          }`
      )
      .join("\n");

    if (customer.payment === "Cash on Delivery") {
      const message = `*New COD Order*\n\nName: ${customer.name}\nPhone: ${customer.phone}\nAddress: ${customer.address}\n\n${orderDetails}\n\nTotal: Rs ${total}`;
      window.open(
        `https://wa.me/923218382527?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }

    if (customer.payment === "Online Payment") {
      // ✅ Redirect to backend payment API
      fetch("http://localhost:5000/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total, customer }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Redirect to JazzCash/Easypaisa page
          window.location.href = data.redirectUrl;
        })
        .catch((err) => console.error("Payment error:", err));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow rounded-lg p-6">
          {/* cart items */}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-3">
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>Qty: {item.qty}</p>
                </div>
              </div>
              <p className="font-semibold">{item.price}</p>
            </div>
          ))}

          {/* total */}
          <div className="flex justify-between mt-6">
            <h4 className="text-xl font-bold">Total:</h4>
            <p className="text-xl font-bold">Rs {total}</p>
          </div>

          {/* Proceed button */}
          {!showCheckout && (
            <button
              onClick={() => setShowCheckout(true)}
              className="mt-6 bg-amber-500 text-white px-5 py-2 rounded shadow hover:bg-amber-600"
            >
              Proceed to Checkout
            </button>
          )}

          {/* Checkout form */}
          {showCheckout && (
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Checkout</h3>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded mb-3"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border px-3 py-2 rounded mb-3"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Full Address"
                className="w-full border px-3 py-2 rounded mb-3"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
              />

              {/* Order summary in form */}
              <div className="mb-4 bg-gray-50 p-3 rounded">
                <h4 className="font-semibold mb-2">Order Summary</h4>
                {cart.map((item) => (
                  <p key={item.id}>
                    {item.title} (x{item.qty}) = Rs{" "}
                    {(parseInt(item.price.replace(/\D/g, "")) || 0) * item.qty}
                  </p>
                ))}
                <p className="mt-2 font-bold">Grand Total: Rs {total}</p>
              </div>

              {/* payment options */}
              <div className="mb-4">
                <label className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={customer.payment === "Cash on Delivery"}
                    onChange={(e) =>
                      setCustomer({ ...customer, payment: e.target.value })
                    }
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Online Payment"
                    checked={customer.payment === "Online Payment"}
                    onChange={(e) =>
                      setCustomer({ ...customer, payment: e.target.value })
                    }
                  />
                  Online Payment
                </label>
              </div>

              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-5 py-2 rounded shadow hover:bg-green-700"
              >
                Confirm & Place Order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
