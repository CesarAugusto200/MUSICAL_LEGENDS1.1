import {Routes , Route } from "react-router-dom"
import LoginPage from "../Page/LoginPage"
import RegistroPage from "../Page/RegistroPage"
import HomePage from "../Page/Home"
import CantoPage from "../Page/CantoPage"
import MusicaPage from "../Page/MusicaPage"
import AboutPage from "../Page/AboutPage"
import ForoPage from "../Page/ForoPage"
import FAQPage from "../Page/FAQPage"
import AgendaPage from "../Page/AgendaPage"
import ListasPage from "../Page/ListasPage"
import Canto1Page from "../Page/Canto1Page"
import Canto2Page from "../Page/Canto2Page"
import Canto3Page from "../Page/Canto3Page"
import Musica1Page from "../Page/MusicaPage1"
import  Musica2Page from "../Page/Musica2Page"
import Musica3Page from "../Page/Musica3Page"
function RoutePrincipal(){
    return(
        <>
                 
          <Routes>
              
              <Route>
                
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/Registro" element={<RegistroPage/>}></Route>
              <Route path="/Home" element={<HomePage/>}></Route>
              <Route path="/Canto" element={<CantoPage/>}></Route>
              <Route path="/Musica" element={<MusicaPage/>}></Route>
              <Route path="/About" element={<AboutPage/>}></Route>
              <Route path="/Foro" element={<ForoPage/>}></Route>
              <Route path="/FAQ" element={<FAQPage/>}></Route>
              <Route path="/Agenda" element={<AgendaPage/>}></Route>
              <Route path="/Lista" element={<ListasPage/>}></Route>
             
              <Route path="/Canto1" element={<Canto1Page/>}></Route>
              <Route path="/Canto2" element={<Canto2Page/>}></Route>
              <Route path="/Canto3" element={<Canto3Page/>}></Route>
              <Route path="/Musica1" element={<Musica1Page/>}></Route>
              <Route path="/Musica2" element={<Musica2Page/>}></Route>
              <Route path="/Musica3" element={<Musica3Page/>}></Route>
              </Route>
          </Routes>
        </>
    )
}
export default RoutePrincipal