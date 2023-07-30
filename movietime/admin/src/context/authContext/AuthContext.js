import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) ||  null,
    fetching:false,
    error:false,

};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
         localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user]);  

    return (
            <AuthContext.Provider value={{user:state.user,fetching:state.fetching,error:state.error,dispatch }}>{children }</AuthContext.Provider>
    )
};