import { styled } from "..";

export const ProductContainer = styled("main",{
  display: 'grid',
  gridTemplateColumns:'1fr 1fr',
  alignItems:'stretch',
  maxWidth: 1150,
  margin: '0 auto',
  gap: '4rem'
})

export const ImageContainer = styled("div", {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465D4 100%)',
  height: 656,
  borderRadius: 8,
  padding: '2rem'
})
export const ProductDetail = styled("div",{
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },
  span: {
    marginTop: '1rem',
  },
  button: {
    marginTop: 'auto',
  }
})