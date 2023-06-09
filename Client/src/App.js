import "./App.css"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import NotFound from "./views/Error404/NotFound";
import Form from "./views/Form/Form";
import { useState, useEffect } from "react";
import Favorites from "./views/Favorites/Favorites";
import axios from "axios"

function App(){

   const navigate = useNavigate();
   const [ access, setAccess ] = useState(false);
   const EMAIL = "eze@gmail.com";
   const PASSWORD = "Eze123";

   const login = async (userData) =>{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         let { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(access)
         access && navigate('/Home')
      } catch (error) {
         console.log(error.message)
      }
   }
   const logout = () =>{
        setAccess(false);
        navigate('/');
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();
   return(
      <div className="App">
         {location.pathname !== "/" && <NavBar logout={logout}/>}
         <Routes>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   )
}

export default App