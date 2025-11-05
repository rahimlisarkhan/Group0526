import styles from "./Button.module.css";
import PropTypes from 'prop-types';

export const Button = ({size = "medium", variant = "primary", disabled = false, showArrow = false, children}) => {

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
  children: PropTypes.node.isRequired
};

// Default props
// Button.defaultProps = {
//   size: 'medium',
//   variant: 'primary',
//   disabled: false,
//   showArrow: false
// }; 


