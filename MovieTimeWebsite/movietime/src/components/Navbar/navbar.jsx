import React, { useState } from 'react';
import "../Navbar/navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  // console.log(window.scrollY);
  
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return 
  }
  console.log(isScrolled);
 
  return (
    <div className= {isScrolled ? 'navbar scrolled' : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt='MovieTime'
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Popular</span>
          <span>Favourites</span>
        </div>
        <div className="right">
          <Search className='icon'/>
          <span>KID</span>
          <Notifications className='icon'/>
          {/* <img src="../../../public/logo.jpeg" alt=""/> */}
          <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
          <ArrowDropDown className='icon'/>
          <div className="options">
            <span>
              Settings
            </span>
            <span>
              Logout
            </span>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
