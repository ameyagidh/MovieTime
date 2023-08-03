import "./app.scss"
import Home from "./pages/home/Home";
import RegisterComponent from "./pages/register/RegisterComponent";
import MyLoginComponent from "./pages/login/MyLoginComponent";
import MyWatchPage from "./pages/watch/MyWatchPage";
import AuthContext from "./authContext/AuthContext"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";

const App = () => {
  // return <Home/>; 
  // return <RegisterComponent/>
  // return <MyLoginComponent/>
  const {user}= useContext(AuthContext); 
  // const user = true;
   
  // const user = false;

  return(
    <BrowserRouter>
    <Routes>
    <Route
          exact
          path="/"
          element={user ? <Home /> : <MyLoginComponent/>}
        />
      <Route  
      path="/movies"
      element={user ? <Home type="movie"/> : <MyLoginComponent/>}
       />
      <Route  
      path="/series" 
      element={user ? <Home type="series"/> : <MyLoginComponent/>}
      />
      <Route  path="register" element={<RegisterComponent />} />
      <Route  path="login" element={<MyLoginComponent />} />
      <Route 
       path="watch"
       element={user ? <MyWatchPage/> : <MyLoginComponent/>} />
    </Routes>
  </BrowserRouter>
  );

};

export default App;