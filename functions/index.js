const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51IPHY7DOWQJlhOeqfFOtRSAZRPkPOBxbfzLPUMVX202r5DSVrPjgZXQ63YyBYUC5kOceHgEPYutzz7RUbr3xFOKc00EK4igZyS'
);
// - App config
const app = express()

// - middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/',(request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });




// listen command
exports.api = functions.https.onRequest(app);
