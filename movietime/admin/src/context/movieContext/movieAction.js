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