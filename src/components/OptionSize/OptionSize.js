import styles from '../Product/Product.module.scss';
import propTypes from 'prop-types';

const OptionSize = props => {

  return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(size => <li key={size.name} ><button type="button" onClick={e => props.setSize(e.target.innerHTML)} className={props.currentSize === size.name ? styles.active : undefined}>{size.name}</button></li>)}
        </ul>
      </div>
  )
}

OptionSize.propTypes = {
  sizes: propTypes.array.isRequired,
  setSize: propTypes.func.isRequired,
  currentSize: propTypes.string.isRequired
}
export default OptionSize