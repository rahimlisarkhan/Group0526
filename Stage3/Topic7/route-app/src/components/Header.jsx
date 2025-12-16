import { useNavigate } from "react-router-dom"
import { ROUTER } from "../constants/router";



export default function Header() {

    const navigate = useNavigate();

  return (
    <header style={{
        borderBottom:"2px solid black",
        padding:"10px",
    }}>
      <h2>Header</h2>
      <nav>
        <li onClick={()=> navigate(ROUTER.SCREENS.HOME)} >
            Home
        </li>
          <li onClick={()=> navigate(ROUTER.SCREENS.ABOUT)} >
            About
        </li>
          <li onClick={()=> navigate(ROUTER.SCREENS.CONTACT)} >
            Contact
        </li>
          <li onClick={()=> navigate(ROUTER.SCREENS.BLOG)} >
            Blog
        </li>

        <li onClick={()=> navigate(ROUTER.ACTIONS.SETTINGS_PROFILE)} >
            Settings
        </li>
      </nav>
    </header>
  )
}