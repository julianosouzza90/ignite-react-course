import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default  async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {priceId} = req.body
 console.log(priceId)
  if(req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
 
  }
  if(!priceId) {
    return res.status(400).json({error: 'price not found'});
  }
  const success_url = `http://localhost:3000/success`;
  const cancel_url = `http://localhost:3000/`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
    success_url,
    cancel_url

  })

  return res.status(201).json({
    checkoutUrl: checkoutSession
  })

}