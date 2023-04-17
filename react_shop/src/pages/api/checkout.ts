import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../lib/stripe";

export default  async function handler(req: NextRequest, res: NextResponse) {
  const priceId = 'price_1MvKAOED29AEXthMwgyFKrjY'
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