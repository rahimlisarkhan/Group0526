import { useGlobal } from "../../store/global/useGlobal";
import { cls } from "../../utils/cls";
import Header from "../Header";
import styles from "./Layout.module.css";

export default function Layout({children}) {
  const {mode} = useGlobal()

  return (
    <div className={cls(styles.layout, mode == 'dark' ? styles.layoutDark : styles.layoutLight)}>
      <Header />
      <div className={styles.main}>
        <div className={cls(styles.content, mode === 'dark' ? styles.contentDark : styles.contentLight)}>
            {children}
        </div>
      </div>
      <footer className={cls(styles.footer, mode == 'dark' ? styles.footerDark : styles.footerLight)}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
