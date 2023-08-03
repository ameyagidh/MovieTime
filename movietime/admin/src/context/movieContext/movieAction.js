export const getmovieStart = ()=>({
     type:"GET_Start",
});

export const getmovieSuccess = (movies)=>({
    type:"GET_Success",
    payload:movies,
});

export const getmovieFailure = ()=>({
    type:"GET_Failure",
});


export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const  createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
  });
  
  export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
  });

  export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
  });
  
  export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
  });
  
  export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
  });

export const deletemovieStart = ()=>({
    type:"DELETE_Start",
});

export const deletemovieSuccess = (id)=>({
   type:"DELETE_Success",
   payload:id,
});

export const deletemovieFailure = ()=>({
   type:"DELETE _Failure",
});