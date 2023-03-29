import "../assets/Style/NuestraInfo.css"
import Mauricio from "../assets/img/Mauricio.jpg"
import Cesar from "../assets/img/Cesar.jpg"
import EMA from "../assets/img/EMA.jpg"
function NuestraInfo(){
    return(
        <>
        <div className="wrapper1">
        <div className="static-txt">Equipo de Desarrollo </div>
        <ul className="dynamic-txts">
          <li><span>Cesar Augusto</span></li>  
          <li><span>Mauricio</span></li>  
          <li><span>Emma</span></li>  
        </ul>
       
      </div >
      <img className="Cesar" src={Cesar}></img>
      
      <img className="Mau" src={Mauricio}></img>

      <img className="EMA" src={EMA}></img>

        </>
    )
}
export default NuestraInfo