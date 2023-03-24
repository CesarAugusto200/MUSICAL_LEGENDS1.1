import Musica_Intermedio from "../../assets/img/Musica_Intermedio.jpg"
import Musica_Profesional from "../../assets/img/Musica_Profesional.jpg"
import Musica_Principiante from "../../assets/img/Musica_Principiante.jpg"
import "../../assets/Style/Musica.css"
function Musica (){
    return(
        <>
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
        
         <a href="MusicaCurso" class="Curso">
        
          
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
        
         <a href="MusicaCurso2" class="Curso">
        
          
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
        
         <a href="MusicaCurso3" class="Curso">
        
          
           <button className="btn fill">Entrar Ahora
           
           </button>
        </a>
         </div>
           </div>
  
  
          </>
    )
}
export default Musica