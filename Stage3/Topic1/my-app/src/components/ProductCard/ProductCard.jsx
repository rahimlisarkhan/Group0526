
import styles from "./ProductCard.module.css";


function ProductCard() {
  return (
    <div className={styles.product_card}>
      <h2>Product Name</h2>
      <p>Product Description</p>
      <span>$19.99</span>
    </div>
  );
}

export default ProductCard;