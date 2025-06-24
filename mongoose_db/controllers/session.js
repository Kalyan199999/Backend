const Stripe = require("stripe");
const STRIPE_SECRET_KEY = require('./myKey')

const stripe = Stripe(STRIPE_SECRET_KEY);

const session =  async (req, res) => {
  
  const { amount, productName } = req.body;

  try 
  {
    const session = await stripe.checkout.sessions.create({

    //   payment_method_types: ['card', 'upi'],

      mode: 'payment',

      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: productName || 'Test Product',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });

  } 
  catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
};

module.exports = session
