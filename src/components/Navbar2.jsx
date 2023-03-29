import { Link, NavLink } from 'react-router-dom';
import "../assets/Style/Navbar.css"
function Navbar2(){
    return(
        <nav className='navcontainer'>
                <h2> Musical <span> Legends</span></h2>
                 <NavLink 
                        
                        className="text1" 
                        to="/Home"
                    >
                        Home
                    </NavLink>

            <div className="navbar">
            <NavLink 
                        className="text2" 
                        to="/Canto"
                    >
                        Cursos De Canto
                    </NavLink>

                    <NavLink 
                        className="text3" 
                        to="/Musica"
                    >
                        Cursos De Musica
                    </NavLink> 


                    <NavLink 
                        className="text31" 
                        to="/About"
                    >
                        Sobre Nosotros
                    </NavLink> 

                    <NavLink 
                        className="text" 
                        to="/Citas"
                    >
                        Agenda Tu clase
                    </NavLink> 
            </div>
            </nav>
    )
}
export default Navbar2