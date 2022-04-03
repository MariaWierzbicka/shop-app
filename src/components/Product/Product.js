import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import propTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const getPrice = size => {
    const pickedSizeElem = props.sizes.find(element => element.name === size);
    return props.basePrice + pickedSizeElem.additionalPrice;    
  };
  
  const calculatedPrice = useMemo(() => {
    return getPrice(currentSize)
  }, [currentSize]);

  

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage className={styles.image} name={props.name} color={currentColor}/>
      </div>
      <div>
        <header>
          <h2 className={styles.name}> {props.title} </h2>
          <span className={styles.price}>Price: {calculatedPrice}$</span>
        </header>
        <ProductForm 
          currentColor={currentColor}
          currentSize={currentSize}
          setSize={setCurrentSize}
          setColor={setCurrentColor}
          price={calculatedPrice}
          title={props.title}
          colors={props.colors}
          sizes={props.sizes}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: propTypes.string.isRequired,
  basePrice: propTypes.number.isRequired,
  sizes: propTypes.array.isRequired
};

export default Product;