import Navbar from "./Navbar"
import Musica_Principiante from "../assets/IMG/Musica_Principiante.jpg"
import Musica_Intermedio from "../assets/IMG/Musica_Intermedio.jpg"
import Musica_Profesional from "../assets/IMG/Musica_Profesional.jpg"
import "../assets/Style/Musica.css"
function Musica(){
    return(
        <>
        <Navbar/>
        <div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={Musica_Principiante} alt="" />
          </div>
          <h1> Curso de Musica para Principiantes</h1>
          <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
         </div>
         <div className="button-wrapper"> 
        
         <a href="Musica1" class="Curso">
        
          
           <button className="btn fill">Entrar Ahora
           
           </button>
        </a>
         </div>
           </div>



           <div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={Musica_Intermedio} alt="" />
          </div>
          <h1> Curso de Musica para Intermedio</h1>
          <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
         </div>
         <div className="button-wrapper"> 
        
         <a href="Musica2" class="Curso">
        
          
           <button className="btn fill">Entrar Ahora
           
           </button>
        </a>
         </div>
           </div>



           <div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={Musica_Profesional} alt="" />
          </div>
          <h1> Curso de Musica para Profesional</h1>
          <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
         </div>
         <div className="button-wrapper"> 
        
         <a href="Musica3" class="Curso">
        
          
           <button className="btn fill">Entrar Ahora
           
           </button>
        </a>
         </div>
           </div>
  
        </>
    )
}
export default Musica