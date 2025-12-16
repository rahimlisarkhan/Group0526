import Header from "../components/Header";
import Layout from "../components/Layout/Layout";
import { useGlobal } from "../store/global/useGlobal";



export default function About() {


  const globalState = useGlobal()
  
    console.log("About",globalState);

  return (
          <Layout>
            <h1>About Page:{globalState.exampleTitle}</h1>
          </Layout>
  )
}