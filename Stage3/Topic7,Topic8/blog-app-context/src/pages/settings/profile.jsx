import { useState } from "react";
import { useGlobal } from "../../store/global/useGlobal"



export default function Profile() {

      const [show,setShow] = useState(false);

      const a = useGlobal()

      console.log("Profile",a);

  return (
    <h1>Profile Page</h1>
  )
}