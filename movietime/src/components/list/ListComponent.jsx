import React from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItemComponent from "../listItem/ListItemComponent"

const ListComponent = () => {
  return (
    <div className='list'>
    <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined/>
        <div className="container">
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
       <ListItemComponent />
       <ListItemComponent />
       <ListItemComponent />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
    )
}

export default ListComponent
