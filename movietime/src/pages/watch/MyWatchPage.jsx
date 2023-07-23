import { ArrowBackOutlined } from '@material-ui/icons'
import "./MyWatchPage.scss"
import Home from '../home/Home'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MyWatchPage = (props) => {
 const videoPlay = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

 const location = useLocation();
  // const movie = location.movie;
//  const movie = props.location.state.movie;
 const movie = props.location?.state?.movie;
 console.log(movie)
  return (
    <div className="watch">
      <Link to = "/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        loop
        progress
        controls
        src={videoPlay} 
        // src={movie.video}
      />
    </div>
  );
  }
  export default MyWatchPage
