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