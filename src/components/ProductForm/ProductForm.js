import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import propTypes from 'prop-types';



const ProductForm = props => {

  return (
    <form>
      <OptionSize sizes={props.sizes} setSize={props.setSize} currentSize={props.currentSize}/>
      <OptionColor colors={props.colors} currentColor={props.currentColor} setColor={props.setColor}/>
      <Button className={styles.button} name={props.title} price={props.price} color={props.currentColor} size={props.currentSize}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  price: propTypes.number.isRequired,
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  currentSize: propTypes.string.isRequired,
  currentColor: propTypes.string.isRequired,
  setSize: propTypes.func.isRequired,
  setColor: propTypes.func.isRequired
}

export default ProductForm;