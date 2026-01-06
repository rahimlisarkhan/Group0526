import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Header";



export default function Contact() {


  const [searchParams,setSearchParams] = useSearchParams();



  const color = searchParams.get("color");
  const modal = searchParams.get("modal");
  const price = searchParams.get("price");

  console.log("color",color);
  console.log("modal",modal);
  console.log("price",price);


  const handleCloseModal = () => {
    // Remove the 'modal' parameter from the URL
    searchParams.delete("modal");
    setSearchParams(searchParams);
  }


  return (
   <>
          <Header/>
          <main>
            <h1>Contact Page</h1>
           {modal == "active" ?  <p>This is the contact page of the application.</p> : null}
            {/* <button onClick={() => setSearchParams("color=black&modal=active&price=1000")}>Active</button> */}
            <button onClick={() => setSearchParams("modal=active")}>Active</button>
            <button onClick={handleCloseModal}>Close Modal</button>
          </main>
    </>
  )
}