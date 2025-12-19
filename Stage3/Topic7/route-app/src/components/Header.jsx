import { useLocation, useNavigate } from "react-router-dom"
import { ROUTER } from "../constants/router";
import styles from "./Header.module.css";
import { cls } from "../utils/cls";
import { useGlobal } from "../store/global/useGlobal";



console.log("styles",styles);


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const {mode, actions} = useGlobal()

  const isActive = (path) => {
    if(path == location.pathname){ 
      return styles.activeNavItem
    }
    return "";
  }

  return (
    <header className={`${styles.header} ${mode === 'dark' ? styles.headerDark : styles.headerLight}`}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>My Website</h2>
        {/* <h2 className={`${styles.headerTitle} ${styles.fontMedium} ${styles.container}`}>My Website</h2>
        <h2 className={cls(styles.headerTitle, styles.fontMedium, styles.container,false)}>My Website</h2> */}
        <nav>
          <ul className={styles.headerNav}>
            <li className={cls(isActive(ROUTER.SCREENS.HOME) , styles.navItem,styles)} onClick={() => navigate(ROUTER.SCREENS.HOME)}>
              Home
            </li>
            <li className={cls(isActive(ROUTER.SCREENS.ABOUT) , styles.navItem)} onClick={() => navigate(ROUTER.SCREENS.ABOUT)}>
              About
            </li>
            <li className={cls(isActive(ROUTER.SCREENS.CONTACT) , styles.navItem)} onClick={() => navigate(ROUTER.SCREENS.CONTACT)}>
              Contact
            </li>
            <li className={cls(isActive(ROUTER.SCREENS.BLOG) , styles.navItem)} onClick={() => navigate(ROUTER.SCREENS.BLOG)}>
              Blog
            </li>
            <li className={cls(isActive(ROUTER.ACTIONS.SETTINGS_PROFILE) , styles.navItem)} onClick={() => navigate(ROUTER.ACTIONS.SETTINGS_PROFILE)}>
              Settings
            </li>
                 <button className={styles.toggleModeBtn} onClick={actions.toggleMode}>
            Toggle Mode
          </button>
          </ul>

     
        </nav>
      </div>
    </header>
  )
}