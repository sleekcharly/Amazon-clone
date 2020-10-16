const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HcIAlIMIY2scREg2vpnb5OjRconNKCxgIPjDAGnlFl5nSZVvkrQJngzjZRhoExgXLYW1MBc9YKMlUaGloVnUCaM00JGQvK8aK"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request Received BOOm!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-f0e6f/us-central1/api
