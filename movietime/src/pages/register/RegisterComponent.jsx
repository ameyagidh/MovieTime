import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom";
import "../register/register.scss"
import axios from 'axios';
 
export default function RegisterComponent()  {

  const[email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async(e) => {
    e.preventDefault ();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      await axios.post("/auth/register",{email,username,password});
      history.push("/login");
    }catch{
      
    }
  };

  return (
    <div className='register'>
    <div className="top">
      <div className='wrapper'>
           <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
          <div className="container">
            <h1>Unlimed Tv Shows and Movies</h1>
            <p>Ready to watch? Old member login else register
            </p>
            {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
          </div>
    </div>
    
    )
}
