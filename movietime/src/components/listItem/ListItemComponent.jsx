import React from 'react'
import "../listItem/listItemComponent.scss"
import { Add, PlayArrowOutlined, PlayArrowRounded, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

const ListItemComponent = () => {
  return (
    <div className='listItem'> 
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
    <div className="itemInfo">
      <div className="icons">
        <PlayArrowOutlined />
        <Add />
        <ThumbUpAltOutlined />
        <ThumbDownAltOutlined />
      </div>
      <div className="itemInfoTopic"></div>
      <span >1 hr 30 mins</span>
      <span className="limit"> +60</span>
      <span> 1999</span>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque ex quis molestiae assumenda voluptates facere totam dicta, ad, nihil iusto debitis, soluta perspiciatis quia ipsam aut ullam cupiditate commodi.
      </div>
      <div className="genre">Action</div>
  </div>
    
    )

}

export default ListItemComponent