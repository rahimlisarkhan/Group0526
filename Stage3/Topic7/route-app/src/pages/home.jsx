import { useCallback } from "react";
import Header from "../components/Header";
import { useGlobal } from "../store/global/useGlobal";
import Layout from "../components/Layout/Layout";




export default function Home() {


  const globalState = useGlobal()

  console.log("Home",globalState);


  const handleTitle = useCallback(() => {
    
     globalState.actions.setExampleTitle("New Global Title")

  },[globalState.actions])

  return (
    <>
          <Layout>
            <h1>Home Page</h1>
            <h2>{globalState.exampleTitle}</h2>

            <button onClick={handleTitle}>
              Change Global Title
            </button>
          </Layout>

    </>
  )
}