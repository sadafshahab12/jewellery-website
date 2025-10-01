import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.post("/api/pay", async (req, res) => {
  const { amount, customer } = req.body;

  try {
    let apiKey = process.env.SANDBOX_SECRET_KEY;

    console.log("Incoming amount:", amount);
    console.log("API Key:", apiKey ? "Loaded" : "Missing");

    const response = await fetch(
      "https://sandbox.api.getsafepay.com/order/v1/init",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          amount: parseInt(amount) * 100,
          currency: "PKR",
          transaction_type: "SALE",
          environment: "sandbox",
          redirect_url: "http://localhost:5173/payment-success",
          customer: {
            name: customer?.name || "Guest User",
            phone: customer?.phone || "03000000000",
            address: customer?.address || "No address provided",
          },
        }),
      }
    );

    const data = await response.json();
    console.log("Safepay response:", data);

    if (data?.data?.redirect_url) {
      res.json({ redirectUrl: data.data.redirect_url });
    } else if (data.redirect_url) {
      res.json({ redirectUrl: data.redirect_url });
    } else {
      res
        .status(400)
        .json({ error: "No redirect_url received", details: data });
    }
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
