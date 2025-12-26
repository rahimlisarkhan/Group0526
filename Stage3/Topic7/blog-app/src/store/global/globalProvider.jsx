import { createContext, useReducer } from "react";
import { TYPES } from "./types";

const initialState = {
    mode:"light",
    blogs:[],
    blog:null,
    profile:null,
    loading:true,
    exampleTitle:"",
}

const GlobalContext = createContext(initialState);

function reducer(state, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODE:
            return {
                ...state,
                mode: state.mode === "light" ? "dark" : "light",
            };

        case TYPES.SET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };

        case TYPES.SET_BLOG:
            return {
                ...state,
                blog: action.payload,
            };

        case TYPES.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };

        case TYPES.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case TYPES.SET_EXAMPLE_TITLE:
            return {
                ...state,
                exampleTitle: action.payload,
            };

        default:
            return state;
    }
}


export const GlobalStore = ({children})=>{

    const [state,dispatch] = useReducer(reducer, initialState);

    const values = {
       state,
       dispatch
    }

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>

}


export default GlobalContext;