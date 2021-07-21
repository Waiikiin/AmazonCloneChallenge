const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51JERAiKk8OJsN8HVWKVgZIPIzIOp88W6Ql57AMRnJaGEhtOhm5TLg0uoQIsCosRDHtNjE8O4GBkjltCoZ3UeX6IW00mrihbHqp');

// - API

// - App config 
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}))
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send ('api test'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntents = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    // 201 = created something and everything is good
    response.status(201).send({
        clientSecret: paymentIntents.client_secret,
    })
})
// - Listen command
exports.api = functions.https.onRequest(app)