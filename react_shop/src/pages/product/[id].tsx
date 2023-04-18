import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetail } from "../../styles/pages/product";
import axios from "axios";
import { useState } from "react";


interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}
export default function Product({product}:ProductProps) {
 
  const [isCreatingSession, setIsCreatingSession] = useState(false)
 async function handleBuyProduct() {
   try {
     setIsCreatingSession(true)
     const response = await axios.post('/api/checkout', {
       priceId: product.defaultPriceId
     })
     const { checkoutUrl } = response.data
     window.location.href = checkoutUrl.url

   } catch (err) {
     setIsCreatingSession(false)
     alert('falha ao redirecionar')
   }
 }

  return (
    <ProductContainer>
    <ImageContainer>
      <Image src={product.imageUrl}  width={520} height={480} alt=""  />
    </ImageContainer>
    <ProductDetail>
      <h1>{product.name}</h1>
      <span>{product.price}</span>
     <p>{product.description}</p>
       <button disabled={isCreatingSession} onClick={handleBuyProduct}>Comprar agora</button>
    </ProductDetail>
</ProductContainer>
  )

}
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback:'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId = params.id;
  const product = await stripe.products.retrieve(productId,{
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price
  return {
    props: {
      product: {
        id: productId,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-br',{
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    }
  }
}