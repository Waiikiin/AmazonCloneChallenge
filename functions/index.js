const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');

const stripeConfig = require ('./resources/stripe')
const stripe = require("stripe")(stripeConfig[0].secretKey);

// - App config 
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}))
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('API test'))
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