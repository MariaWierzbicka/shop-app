import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import propTypes from 'prop-types';



const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }  

  return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(color => <li key={color} ><button type="button" onClick={e => props.setColor(color)} className={clsx(prepareColorClassName(color), color === props.currentColor ? styles.active : undefined)}></button></li>)}
        </ul>
      </div>
  )
}

OptionColor.propTypes = {
  colors: propTypes.array.isRequired,
  setColor: propTypes.func.isRequired,
  currentColor: propTypes.string.isRequired
}

export default OptionColor;