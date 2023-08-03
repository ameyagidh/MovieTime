import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React, { useEffect,useState } from 'react'
import "./featured.scss"
import axios from 'axios'; 

const Featured = ({type,setGenre}) => {  

  const[content,setContent] = useState({});
  
  useEffect(()=>{
      const getRandomMovie = async()=>{
          try{
              const res = await axios.get(`/movies/random?type=${type}`,
              {
                headers: {
                  token:
                  "Ameya eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQzNWY2ZTVkYTQ4NTc1N2IxOTBiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDY5Mzc1NiwiZXhwIjoxNjkxMTI1NzU2fQ.QV5q8C2M_4099ESG9lafLk-ygeyycY-W_RSjjIgdGOc",
                },
              });
            setContent(res.data[0]);
          }catch(err){
            console.log(err);
          }
      } ;
      getRandomMovie();
  },[type]);
  return (
    <div className='featured'>
      {type && (
        <div className="category">
         <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id ="genre"  onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option> 
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
    <img
        // width="100%"
        // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        src={content.img}
        alt='MovieTime'
        />
    <div className="info">
        <img
          src={content.img}
            alt=""
        />
       {content.desc}  <span className="desc">
    </span>
    <div className="buttons">
        <button className="play">
        <PlayArrow/>
        <span>
          Play
        </span>
        </button>
        <button className="more">
        <InfoOutlined/>
        <span>
          Info
        </span>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Featured;
