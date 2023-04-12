import Image from 'next/image'
import {GetServerSideProps, GetStaticProps} from 'next'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import Stripe from 'stripe'

import { HomeContainer, Product} from '../styles/pages/home'

import { stripe } from '../lib/stripe'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
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
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products.map(product => (
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={420} height={480} alt=""/>
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price} </span>
             </footer>
        </Product>
        ))
      }
        
    </HomeContainer>
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