import "../assets/Style/AboutInfo.css"
import momento from "../assets/img/momento.jpg"
function About(){
   
    return(
        <>  
        <div className="Inicio">

        <h1 className="informacion">
             <h2>Que es Musical <span> Legends?</span></h2></h1>

             <div className="contenedor">

            <h1 className="informacion2">Musical Legends Es un Lugar donde
                Aprenderas a Desarrollar tu voz dandote una pequeña orientacion
                de Tus Primeros Pasos para entrar al mundo de la musica
            </h1>
            
             </div>

             
        </div>

        <div className="InformacionPage">
                <h2 className="InfoFinal">
                    Somos una Empresa Con el Objectivo de Ayudarte a Alcanzar tus metas
                    Necesitas alguien que te guie En tu Camino Musical ¡Cuenta Con nosotros!
                    En Musical Legends Tendras Una Experiencia Unica y Agradable
                </h2>
             </div>

        <div className="AboutImg">
            <img src={momento}></img>
        </div>
        </>
    )
}
export default About