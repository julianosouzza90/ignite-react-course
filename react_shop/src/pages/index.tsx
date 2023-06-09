import Image from 'next/image'
import Link from 'next/link'
import {GetServerSideProps, GetStaticProps} from 'next'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import Stripe from 'stripe'

import { HomeContainer, Product} from '../styles/pages/home'

import { stripe } from '../lib/stripe'
import Head from 'next/head'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}
export default function Home({products}:HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48,
      },
      rubberband: true
    }

  )
  return(
   <>
   <Head>
    <title>Ignite Shop - Inicio</title>
    <button>Cart</button>
   </Head>
     <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products.map(product => (
          <Link href={`product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={420} height={480} alt=""/>
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price} </span>
              </footer>
          </Product>
        </Link>
        ))
      }
        
    </HomeContainer>
   </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand:['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
      
    }
  })

  return  {
    props: {
      products
    },
    revalidate: 1
  }
}