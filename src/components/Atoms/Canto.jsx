import principiante from "../../assets/img/principiante.jpg"
import intermedio from "../../assets/img/intermedio.jpg"
import avanzado from "../../assets/img/avanzado.jpg"
import "../../assets/Style/Canto.css"


function Canto (){


    return(
        <>

<div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={principiante} alt="" />
          </div>
          <h1> Curso de Canto para Principiantes</h1>
          <p>En Este Apartado Aprenderas a Conocer Tu voz
            y Entrenarla
          </p>
         </div>
         <div className="button-wrapper"> 
        
         <a href="Canto2" class="Curso">
        
          
           <button className="btn fill">Entrar Ahora
           
           </button>
        </a>
         </div>
           </div>

           <div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={intermedio} alt="" />
          </div>
          <h1> Curso Canto Intermedio</h1>
          <p>En este Apartado Comenzaras a Liberar Tu voz
            Para Encontrar Tu Brillo y estilo
          </p>
         </div>
         <div className="button-wrapper"> 
         
         <a href="Curso1" class="Curso">
           <button className="btn fill">Entrar ahora</button>
           </a>
         </div>
           </div>


           <div className="container">
        <div className="wrapper">
          <div className="banner-image"> 
          <img src={avanzado} alt="" /></div>
          <h1> Curso Canto Avanzado</h1>
          <p>En este Apartado Pulimeros Todo Lo Aprendido
            Mejorando Las Tecnicas Para Mantener tu Voz sana 
        
          </p>
         </div>
         <div className="button-wrapper"> 
         
         <a href="Canto3" class="Curso">
           <button className="btn fill">Entrar Ahora</button>
           </a>
         </div>
           </div>




        </>
       
    )
}

export default Canto;