import { useCallback } from "react";
import { useGlobal } from "../store/global/useGlobal";
import Layout from "../components/Layout/Layout";
import { IoMdSend } from "react-icons/io";

import { Button, DatePicker, Divider, Flex } from 'antd';
import { TYPES } from "../store/global/types";


export default function Home() {


  const {state, dispatch} = useGlobal()


  const handleTitle = useCallback(() => {
     dispatch({ type: TYPES.SET_EXAMPLE_TITLE, payload: "New Global Title" })
  },[dispatch]);

  return (
    <>
          <Layout>
            <h1>Home Page</h1>
            <h2>{state.exampleTitle}</h2>

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