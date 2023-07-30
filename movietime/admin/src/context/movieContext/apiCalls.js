import axios from "axios";
import { getmovieFailure, getmovieStart, getmovieSuccess } from "./movieAction";

export const getMovies = async(dispatch)=>{
    dispatch(getmovieStart);
     try{
        const res = await axios.get("/movies", {
            headers: {
              token: "Ameya " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
        dispatch(getmovieSuccess(res.data));
     }catch(err){
        dispatch(getmovieFailure)
     }

}