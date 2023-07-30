import "./widgetSm.css";
import React, { useEffect } from "react";
import { Visibility } from "@material-ui/icons";
import {useState} from "react"
import axios from "axios";


export default function WidgetSm() {

  const [NewUsersList,setNewUsersList] = useState([]);

  useEffect(()=>{
    const getUsersList = async()=>{
    try{
      const fetchedUsersList = await axios.get("/users?new=true",{

        headers:{
          token: "Ameya eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQzNWY2ZTVkYTQ4NTc1N2IxOTBiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDY5Mzc1NiwiZXhwIjoxNjkxMTI1NzU2fQ.QV5q8C2M_4099ESG9lafLk-ygeyycY-W_RSjjIgdGOc"
        ,}
      });
      setNewUsersList(fetchedUsersList.data)
    }catch(err){
      console.log(err);
    }
  };
  getUsersList();
  },[]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
    
          {NewUsersList.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
