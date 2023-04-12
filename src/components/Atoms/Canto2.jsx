import ReactPlayer from "react-player"
import CantoIntermedio from "../../assets/Video/CantoIntermedio.mp4"
import "../../assets/Style/CursosCanto.css"
function Canto2(){
    return(
            <div className="video-container">
                   
                   <ReactPlayer url={CantoIntermedio} controls/>
                
                 </div>
    )
} 
export default Canto2