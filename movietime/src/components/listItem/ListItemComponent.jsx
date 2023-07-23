import React, { useEffect,useState } from 'react'
import "../listItem/listItemComponent.scss"
import { Add, PlayArrowOutlined, PlayArrowRounded, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from "axios";
import { Link } from 'react-router-dom';
import MyWatchPage from '../../pages/watch/MyWatchPage';

const ListItemComponent = ({index,item}) => {

  const [isHovered,setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Ameya eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQzNWY2ZTVkYTQ4NTc1N2IxOTBiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDEzMjIyNywiZXhwIjoxNjkwNTY0MjI3fQ.N1tm1pjqGQOxiTvJJy7srnJJu9YdRt228Z2SHdCuoYw",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (

    <Link to={{pathname:"/watch",movie:movie }}>
    <div
    className="listItem"
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* {"https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"} */}
    <img src={movie.img}
     alt="" />
    {isHovered && (
      <>
        <video src={movie.trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrowRounded className="icon" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownAltOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{item.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
        </div>
      </>
    )}
  </div>
  </Link>
    )
}

export default ListItemComponent