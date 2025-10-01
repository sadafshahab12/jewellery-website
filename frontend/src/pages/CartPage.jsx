import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
    paymentProof: null,
    easypaisaNumber: "",
    jazzcashNumber: "",
  });
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cart.reduce(
    (acc, item) =>
      acc + (parseInt(item.price.replace(/\D/g, "")) || 0) * item.qty,
    0
  );

  const handlePaymentProof = (e) => {
    setCustomer({ ...customer, paymentProof: e.target.files[0] });
  };

  const handleCheckout = async () => {
    if (customer.paymentMethod === "COD") {
      alert("Order placed successfully with Cash on Delivery!");
      return;
    }

    console.log("Submitting payment info:", customer);
    alert("Payment info submitted. Backend integration pending.");
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

          {!showCheckout && (
            <button
              onClick={() => setShowCheckout(true)}
              className="mt-6 bg-amber-500 text-white px-5 py-2 rounded shadow hover:bg-amber-600"
            >
              Proceed to Checkout
            </button>
          )}

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

              {/* Payment method selection */}
              <div className="mb-4">
                {["COD", "Easypaisa", "JazzCash"].map((method) => (
                  <label key={method} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={customer.paymentMethod === method}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          paymentMethod: e.target.value,
                        })
                      }
                    />
                    {method === "COD"
                      ? "Cash on Delivery"
                      : `Pay with ${method}`}
                  </label>
                ))}
              </div>

              {/* Conditional fields for payment */}
              {(customer.paymentMethod === "Easypaisa" ||
                customer.paymentMethod === "JazzCash") && (
                <div
                  className={`mb-4 p-3 border rounded ${
                    customer.paymentMethod === "Easypaisa"
                      ? "bg-yellow-50"
                      : "bg-green-50"
                  }`}
                >
                  <p>
                    Enter your{" "}
                    {customer.paymentMethod === "Easypaisa"
                      ? "Easypaisa"
                      : "JazzCash"}{" "}
                    mobile number:
                  </p>
                  <input
                    type="text"
                    placeholder={`${customer.paymentMethod} Number`}
                    className="w-full border px-3 py-2 rounded mt-2 mb-3"
                    value={
                      customer.paymentMethod === "Easypaisa"
                        ? customer.easypaisaNumber
                        : customer.jazzcashNumber
                    }
                    onChange={(e) =>
                      setCustomer({
                        ...customer,
                        [customer.paymentMethod === "Easypaisa"
                          ? "easypaisaNumber"
                          : "jazzcashNumber"]: e.target.value,
                      })
                    }
                  />

                  <p className="mb-2">Upload screenshot of payment:</p>

                  {/* Custom File Input */}
                  <label className="flex items-center gap-2 bg-white border rounded px-3 py-2 cursor-pointer hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-6-6h.01M18 6h.01M6 6h.01"
                      />
                    </svg>
                    {customer.paymentProof
                      ? customer.paymentProof.name
                      : "Choose file"}
                    <input
                      type="file"
                      onChange={handlePaymentProof}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

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
