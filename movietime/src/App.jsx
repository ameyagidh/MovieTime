import "./app.scss"
import Home from "./pages/home/Home";
import RegisterComponent from "./pages/register/RegisterComponent";
import MyLoginComponent from "./pages/login/MyLoginComponent";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  // return <Home/>; 
  // return <RegisterComponent/>
  // return <MyLoginComponent/>


  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<RegisterComponent />} />
      <Route path="login" element={<MyLoginComponent />} />
    </Routes>
  </BrowserRouter>
  );

};

export default App;