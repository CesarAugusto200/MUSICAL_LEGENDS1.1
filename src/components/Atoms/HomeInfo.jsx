import "../../assets/Style/HomeInfo.css"
import CantoFondo from "../../assets/Video/CantoFondo.mp4"
import MusicaDj from "../../assets/Video/MusicaDj.mp4"
function Homeinfo(){
    return(
        <>
        <h1>Bienvenido</h1>
       
        <div className="container">
        <div className="wrapper">
          <div className="banner-image">
          <video className="video1" src={CantoFondo} autoPlay loop muted></video>

             </div>
             <div className="banner-image">
          <video className="video1" src={MusicaDj} autoPlay loop muted></video>
             </div>
          <h1> Musical Legends</h1>
          <p>Aprende a dominar tu voz , encuentra tu chispa</p>
         </div>
         <div className="button-wrapper"> 
        
         
         </div>
           </div>
  
        </>
    )
}
export default Homeinfo;