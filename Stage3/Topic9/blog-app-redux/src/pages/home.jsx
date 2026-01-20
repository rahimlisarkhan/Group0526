import { useCallback, useEffect } from "react";
import { useGlobal } from "../store/global/useGlobal";
import Layout from "../components/Layout/Layout";
import { IoMdSend } from "react-icons/io";

import { Button, DatePicker, Divider, Flex } from 'antd';
import { TYPES } from "../store/global/types";
import { useSelector, useDispatch } from 'react-redux'
import { increment, setLoading } from "../store/home";


export default function Home() {


  const {state, dispatch} = useGlobal()

  const homeState = useSelector((state) => state.home);
  const reduxDispatch = useDispatch();

  const handleTitle = useCallback(() => {
     dispatch({ type: TYPES.SET_EXAMPLE_TITLE, payload: "New Global Title" })
  },[dispatch]);


  useEffect(() => {

    reduxDispatch(setLoading(true));
    
    setTimeout(() => {
      reduxDispatch(setLoading(false));
    }, 2000);

  }, []);

  return (
    <>
          <Layout>
            <h1 className="text-2xl font-bold mt-6 text-blue-700 bg-amber-400 p-2 rounded">Home Page :{homeState.value}</h1>
            <h2>{state.exampleTitle}</h2>
            <button onClick={()=> reduxDispatch(increment(20))
            }>Set Global Title</button>

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