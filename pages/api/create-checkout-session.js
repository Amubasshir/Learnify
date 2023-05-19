const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createStripeCheckout(req, res) {
  const { items, name, email, mobile, address, courseTitle } = req.body;

  const transformItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: 'EUR',
      unit_amount: +(item.price * 100).toFixed(2),
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.cover],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}`,
    metadata: {
      name,
      email,
      mobile,
      address,
      courseTitle,
    },
  });

  res.status(200).json({ id: session.id });
}

export default createStripeCheckout;
