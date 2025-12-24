import { useCallback } from "react";
import { useGlobal } from "../store/global/useGlobal";
import Layout from "../components/Layout/Layout";
import { IoMdSend } from "react-icons/io";

import { Button, DatePicker, Divider, Flex } from 'antd';




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

            <Divider />

             <Flex gap={4} align="center">
                <DatePicker />
                <Button color="purple" variant="solid" onClick={handleTitle} icon={<IoMdSend/>} iconPlacement="end" >
                Filled
              </Button>
            </Flex>
          </Layout>

    </>
  )
}