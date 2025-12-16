import { createContext, useState } from "react";

const initialState = {
    mode:"light",
    blogs:[],
    loading:false,
    exampleTitle:"",
}

const GlobalContext = createContext(initialState);


export const GlobalStore = ({children})=>{

    const [blogs,setBlogs] = useState([]);
    const [mode,setMode] = useState("light");
    const [loading,setLoading] = useState(false);
    const [exampleTitle,setExampleTitle] = useState("Hello from global store");


    const toggleMode = () => {
        setMode(prev => prev === "light" ? "dark" : "light")
    }


    const values = {
        mode,
        blogs,
        loading,
        exampleTitle,
        actions:{
            toggleMode,
            setBlogs,
            setLoading,
            setExampleTitle,
        }
    }

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}


export default GlobalContext;