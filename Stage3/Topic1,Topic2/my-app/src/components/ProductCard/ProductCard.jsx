
import styles from "./ProductCard.module.css";
import FlowerImage from "../../assets/images.jpeg";
import SalaryIcon from "../../assets/salary.svg?react";
import { FaRegEdit } from "react-icons/fa";

function ProductCard({name,description,price}) {
  return (
    <div className={styles.product_card}>
      <img  src={FlowerImage} alt="Product" className={styles.product_image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>${price}</span>
      <SalaryIcon color="red" width={40} height={40} />
      <FaRegEdit  />
    </div>
  );
}

export default ProductCard;