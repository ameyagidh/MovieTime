import React, { useContext, useState } from 'react';
import "../Navbar/navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  // console.log(window.scrollY);
  
  const { dispatch } = useContext(AuthContext);

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
        <Link to ="/" className='link'> 
         <span>Home</span>
         </Link>  
         <Link to="/series" className='link'>  
          <span>Series</span>
          </Link>  
          <Link to="/movies" className='link'>  
          <span>Movies</span>
          </Link>  
          <Link to = "/" className='link'>  
          <span>Popular</span>
          </Link>  
          <Link to="/" className='link'>  
          <span>Favourites</span>
          </Link> 
        </div>
        <div className="right" >
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
            <span onClick={() => dispatch(logout())}>
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
