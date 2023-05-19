const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const sk1 = "sk_test_51N7vHaCN6CQfSvOSHaaRyU4juIwBy9Drhqgsp";
const sk2 = "zqW1gs7KZJNaDFlqBwMUC6PsS9hdevkMKEfMsObVmZ1r7xpUcgn00J1mc1vMu";
const stripe = require("stripe")(sk1 + sk2);

// API set up
// App config
const app = express();

// Middlewares
// app.use(cors({
//     origin: true
// }))
app.use(cors());
app.use(express.json());

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received!", total);

    const pi = await stripe.paymentIntents.create({ amount: total, currency: "usd", });

    // OK - created
    response.status(201).send({
        clientSecret: pi.client_secret,
    });
});


// Listen command

exports.api = functions.https.onRequest(app);

// example end point
// http://127.0.0.1:5001/full-stack-68510/us-central1/api
