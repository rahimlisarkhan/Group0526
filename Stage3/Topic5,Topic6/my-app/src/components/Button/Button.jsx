import { memo, useId } from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types';

 const Button = ({size = "medium", variant = "primary", disabled = false, showArrow = false, children, onBtnClick}) => {


    const componentId = useId() // unique id for the component instance - d8df
  
    console.log("componentId",componentId);

  // const {size, variant, disabled, children} = props

  // const sizeClassName = size ? styles[size] : '';

  const variantClassName = styles[variant || 'primary'];

  const arrowNext = showArrow ? ' →' : '';


  // function sayHello() {
  //   console.log("Hello from Button component!");
  // }

  return (
    <button className={`${styles.btn} ${size ? styles[size] : ''} ${variantClassName}`} disabled={disabled} onClick={onBtnClick}>
      {children} {arrowNext}
    </button>
  );
}

// PropTypes validation
Button.propTypes = {
  // Size prop - must be one of these specific values
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  // Variant prop - button style variants
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  
  // Disabled state
  disabled: PropTypes.bool,
  
  // Show arrow indicator
  showArrow: PropTypes.bool,
  
  // Children can be any renderable content
  children: PropTypes.node.isRequired,

  onBtnClick: PropTypes.func
};


export default memo(Button);

