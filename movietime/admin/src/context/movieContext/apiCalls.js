import axios from "axios";
import { getmovieFailure, getmovieStart, getmovieSuccess, deletemovieFailure,deletemovieSuccess,deletemovieStart } from "./movieAction";

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

export const deleteMovies = async(id,dispatch)=>{
  dispatch(deletemovieStart()); 
   try{
      await axios.delete("/movies/"+id, {
          headers: {
            token: "Ameya " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
      dispatch(deletemovieSuccess(id));
   }catch(err){
      dispatch(deletemovieFailure )
   }

}