import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Payment API route
app.post("/api/pay", async (req, res) => {
  const { amount, customer } = req.body;

  try {
    const response = await fetch("https://sandbox.api.getsafepay.com/order/v1/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "your_safepay_sandbox_api_key", // secure key
      },
      body: JSON.stringify({
        amount: amount * 100, // PKR → Paisa (2000 PKR = 200000 paisa)
        currency: "PKR",
        transaction_type: "SALE",
        redirect_url: "http://localhost:5173/payment-success", // frontend route
      }),
    });

    const data = await response.json();
    res.json({ redirectUrl: data.redirect_url }); // send back to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
