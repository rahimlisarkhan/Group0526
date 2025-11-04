import styles from "./Button.module.css";


export const Button = ({size, variant, disabled, showArrow, children}) => {

  // const {size, variant, disabled, children} = props

  const sizeClassName = styles[size] || '';

  const variantClassName = styles[variant || 'primary'];

  const arrowNext = showArrow ? ' →' : '';

  return (
    <button className={`${styles.btn} ${sizeClassName} ${variantClassName}`} disabled={disabled}>
      {children} {arrowNext}
    </button>
  );
} 


