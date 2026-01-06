import Header from "../components/Header";
import Layout from "../components/Layout/Layout";
import PriceCard from "../components/PriceCard";
import { useGlobal } from "../store/global/useGlobal";



export default function About() {


  const {state} = useGlobal()
  
  console.log("About",state);

  return (
          <Layout>
            <h1 className="text-lg font-semibold">About Page:{state.exampleTitle}</h1>
            <PriceCard/>
          </Layout>
  )
}