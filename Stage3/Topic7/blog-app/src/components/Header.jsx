import { useLocation, useNavigate } from "react-router-dom"
import { ROUTER } from "../constants/router";
import styles from "./Header.module.css";
import { cls } from "../utils/cls";
import { useGlobal } from "../store/global/useGlobal";
import { TYPES } from "../store/global/types";
import { Avatar } from "antd";



console.log("styles",styles);


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const {state, dispatch} = useGlobal()

  const isActive = (path) => {
    if(path == location.pathname){ 
      return styles.activeNavItem
    }
    return "";
  }

  return (
    <header className={`${styles.header} ${state.mode === 'dark' ? styles.headerDark : styles.headerLight}`}>
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
            <button className={styles.toggleModeBtn} onClick={() => dispatch({ type: TYPES.TOGGLE_MODE })}>
              Mode
            </button>
            <button className={styles.toggleModeBtn} onClick={() => navigate(state.profile ? ROUTER.SCREENS.BLOG_CREATE : ROUTER.SCREENS.AUTH.LOGIN)}>
              Get Started
            </button>

            {state.profile && <Avatar style={{marginLeft:"10px"}}>
              {state.profile?.full_name?.slice(0, 2).toUpperCase()}
            </Avatar> }
          </ul>

     
        </nav>
      </div>
    </header>
  )
}