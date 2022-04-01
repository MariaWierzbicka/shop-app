
const ProductImage = props => {
  return (
    <img 
      className={props.className}
      alt={props.name}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
  )
}

export default ProductImage;