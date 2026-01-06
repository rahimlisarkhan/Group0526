import { useContext } from "react";
import GlobalContext from "./globalProvider";


export const useGlobal = () => {

    const context =  useContext(GlobalContext);

    if(!context){
        throw new Error("useGlobal must be used within GlobalStore");
    }

    return context;
}