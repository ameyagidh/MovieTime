import React, { useRef,useState} from 'react'
import "./listComponent.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItemComponent from "../listItem/ListItemComponent"

const ListComponent = () => {

  const [slideNumber,setSlideNumber]  = useState(0);
  const [isMoved,setIsMoved] = useState(false);

  const listRef = useRef()
  const handleClick = (direction)=>{
    // setIsMoved(true);
      // let distance = listRef.current.getBoundingClientRect().x - 50

      if(direction==="left" && slideNumber > 0){
        setSlideNumber(slideNumber - 1);
        setIsMoved(true);
          // listRef.current.style.transform = `translateX(${230 + distance}px)`
          // listRef.current.style.transform = `translateX(${230}px)`
     }
      else if(direction==="right" && slideNumber < 5){
        setSlideNumber(slideNumber + 1);
        setIsMoved(true);
          // listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
      // console.log(distance);
  }

  return (
    <div className='list'>
   <span className="listTitle">
    Continue to watch
   </span>
    <div className="wrapper">
      <ArrowBackIosOutlined className='sliderArrow left' 
      onClick={handleClick("left")}
      // style={{display:!isMoved&&"none"}}
      />
      
      <div className="container" ref={listRef}>
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
        <ListItemComponent />
      </div>
      <ArrowForwardIosOutlined className='sliderArrow right' onClick={handleClick("left")}/>
    </div>
    </div>
    );
}

export default ListComponent