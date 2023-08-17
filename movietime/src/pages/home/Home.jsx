import React from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar/navbar'
import Featured from '../../components/featured/Featured'
import ListComponent from "../../components/list/ListComponent"

const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <Featured  type="movie"/>    
    <ListComponent/>
    <ListComponent/>
    <ListComponent/>
    <ListComponent/>
    </div>
  )
}
export default Home

