import { useEffect, useLayoutEffect } from "react";



export const Nav = ({age}) => {

  //COMPONENT MOUNTED OR UNMOUNTED
  useEffect(() => {
  
    const cleanUp = () => {
      console.log("Nav component unmounted or before age changes:");
      // notify.off()
      // localStorage.clear()
    };
  
    return cleanUp;

  }, []);

  // UPDATED
  useEffect(() => {

     console.log("Nav component mounted or age changed:",age);

    if(age >=18){
      console.log("Access granted");
      // async operations, API calls, etc.

      fetch("https://api.example.com/user-data")
        .then(response => response.json())
        .then(data => console.log("Fetched user data:", data))
        .catch(error => console.error("Error fetching user data:", error));

    }



  }, [age]);

  // Component will mount
  useLayoutEffect(()=>{
    document.title = `User title`;
  },[])

  console.log("age",age);
  

  return (
    <nav>
      <h2>Navigation Bar</h2>
      <p>User Age: {age}</p>
      {age > 5 ? <p>Access Granted</p> : <p>Access Denied</p>}
    </nav>
  );
}