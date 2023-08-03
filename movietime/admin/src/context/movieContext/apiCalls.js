import axios from "axios";
import { getmovieFailure, getmovieStart, getmovieSuccess, deletemovieFailure,deletemovieSuccess,deletemovieStart, createMovieSuccess, createMovieFailure } from "./movieAction";

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
        dispatch(getmovieFailure())
     }

}

export const createMovies = async(movie,dispatch)=>{
  dispatch(deletemovieStart()); 
   try{
      const res =  axios.post("/movies/", movie,{
          headers: {
            token: "Ameya " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
      dispatch(createMovieSuccess(res.data ));
   }catch(err){
      dispatch(createMovieFailure())
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
      dispatch(deletemovieFailure())
   }

}