import React, { useEffect, useState } from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar/navbar'
import Featured from '../../components/featured/Featured'
import ListComponent from "../../components/list/ListComponent"
import axios from "axios"

const Home = ({type}) => {

  const [lists,setLists] =useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers:{
              token:
                "Ameya eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQzNWY2ZTVkYTQ4NTc1N2IxOTBiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDY5Mzc1NiwiZXhwIjoxNjkxMTI1NzU2fQ.QV5q8C2M_4099ESG9lafLk-ygeyycY-W_RSjjIgdGOc"
            }
          }
        );
        setLists(res.data);
      //  console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);


  return (
    <div className="home">
    <Navbar />
    <Featured  type={type} setGenre={setGenre}/>   
    {lists.map((ListComponent)=>{
    <ListComponent ListComponent={ListComponent}/>
    })
    } 
    {lists.map((list) => (
        <ListComponent list={list} />
    ))}

    </div>
  )
}
export default Home

