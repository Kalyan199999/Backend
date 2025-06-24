const Stripe = require("stripe");

const STRIPE_SECRET_KEY = require('./myKey')

const stripe = Stripe(STRIPE_SECRET_KEY);

// const dotenv = require("dotenv");

// dotenv.config();
const makePayment =  async (req, res) => {

        const { amount, currency } = req.body;

        try 
        {
          const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            payment_method_types: ["card"],
          });
      
          res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            message:"Payment Intent created successfully!"
          });
        } 
        catch (error) 
        {
          res.status(500).json({ message: error.message });
        }
};

module.exports = { makePayment };