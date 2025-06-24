// Load the Stripe library
const Stripe = require("stripe");

// Get the Stripe secret key
const STRIPE_SECRET_KEY = require('./myKey')

// Use the key
const stripe = Stripe(STRIPE_SECRET_KEY);

const makePayment =  async (req, res) => {
  
        try 
        {
          const { amount, currency } = req.body;

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