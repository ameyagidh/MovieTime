
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

            case "DELETE_MOVIE_START":
                return{
                    ...state,
                    isFetching:true,
                    error:false,
                };
            case "DELETE_MOVIE_SUCCESS":
                return{
                    movies:state.movie.filer((movie)=> movie._id !== action.payload),
                    isFetching:false,
                    error:false,
                };
            case "DELETE_ MOVIE_FAILURE":
                return{
                    ...state,
                    isFetching:false,
                    error:true,
                }; 

            case "CREATE_MOVIE_START":
                return{
                    ...state,
                    isFetching:true,
                    error:false,
                };

            case "CREATE_MOVIE_SUCCESS":
                return{
                    movie:[...state,action.payload],
                    isFetching:false,
                    error:false,
                };
            case "CREATE_ MOVIE_FAILURE":
                return{
                    ...state,
                    isFetching:false,
                    error:true,
                };     

            case "UPDATE_MOVIE_START":
                return{
                    ...state,
                    isFetching:true,
                    error:false,
                };
                
            case "UPDATE_MOVIE_SUCCESS":
                return{
                    movies :state.movies.map((movie)=>movie._id === action.payload && action.payload),
                    isFetching:false,
                    error:false,
                };
                
            case "UPDATE_ MOVIE_FAILURE":
                return{
                    ...state,
                    isFetching:false,
                    error:true,
                };     

        default:
            return {...state};
    }

}
export default movieReducer;