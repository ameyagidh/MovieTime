import movieReducer from "./movieReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    movies:[],
    fetching:false,
    error:false,

};
export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(movieReducer,INITIAL_STATE);
    return (
            < MovieContext.Provider value={{movies:state.movies,fetching:state.fetching,error:state.error,dispatch }}>{children }</MovieContext.Provider>
    )
};