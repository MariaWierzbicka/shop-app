import styles from './Button.module.scss';
import clsx from 'clsx';
// import propTypes from 'prop-types';


const Button = (props) => {

    const handleSubmit = e => {
        e.preventDefault();

        const summary = {
            Name: props.name,
            Price: props.price,
            Color: props.color,
            Size: props.size
        }
        return console.log(summary);
    }
    return (<button onClick={handleSubmit} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;