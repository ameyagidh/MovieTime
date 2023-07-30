
const movieReducer =(state,action)=>{

     
    switch(action.type){

        case "GET_MOVIE_START":
            return{
                movies:[],
                isFetching:true,
                error:false,
            };
        case "GET_MOVIE_SUCCESS":
            return{
                movies:action.payload,
                isFetching:false,
                error:false,
            };
        case "GET_  MOVIE_FAILURE":
            return{
                movies:[],
                isFetching:false,
                error:true,
            }; 
        default:
            return {...state};
    }

}
export default movieReducer;