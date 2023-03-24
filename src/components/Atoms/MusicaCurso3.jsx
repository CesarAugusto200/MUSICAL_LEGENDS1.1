import ReactPlayer from "react-player"
import Leccion3 from "../../assets/Video/Leccion3.mp4"
function MusicaCurso2(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={Leccion3} controls/>
                
                 </div>
    )
} 
export default MusicaCurso2