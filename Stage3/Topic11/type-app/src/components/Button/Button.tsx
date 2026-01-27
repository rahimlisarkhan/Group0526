import styles from './Button.module.css';
import type { ButtonProps } from './types';

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>{children}</button>
    );
}