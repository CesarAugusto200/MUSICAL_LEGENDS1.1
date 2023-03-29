import {Routes , Route } from "react-router-dom"
import CantoPage from "../Page/CantoPage"
import MusicaPage from "../Page/MusicaPage"
import HomePage from "../Page/HomePage"
import Curso1 from "../Page/Curso1"
import Canto2 from "../Page/Canto2"
import CantoPage3 from "../Page/CantoPage3"
import MusicaPage1 from "../Page/MusicaPage1"
import MusicaPage2 from "../Page/MusicaPage2"
import MusicaPage3 from "../Page/MusicaPage3"
import CitasPage from "../Page/CitasPage"
import AboutPage from "../Page/AboutPage"
import LoginPage from "../Page/LoginPage"
import RegisterPage from "../Page/RegisterPage"


function RoutePrincipal(){
    return(
        <>
                 
          <Routes>
              
              <Route>
                
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/register" element={<RegisterPage/>}></Route>
                 <Route path="/Home" element={<HomePage/>}></Route>
                 <Route path="/Canto" element={<CantoPage/>}></Route>   
                 <Route path="/Musica" element={<MusicaPage/>}></Route> 
                 <Route path="/About" element={<AboutPage/>}></Route>    
                 <Route path="/Citas" element={<CitasPage/>}></Route>  
                 <Route path="/Curso1" element={<Curso1/>}></Route> 
                 <Route path="/Canto2" element={<Canto2/>}></Route> 
                 <Route path="/Canto3" element={<CantoPage3/>}></Route> 
                 <Route path="/MusicaCurso" element={<MusicaPage1/>}></Route> 
                 <Route path="/MusicaCurso2" element={<MusicaPage2/>}></Route> 
                 <Route path="/MusicaCurso3" element={<MusicaPage3/>}></Route> 
              </Route>
          </Routes>
        </>
    )
}
export default RoutePrincipal