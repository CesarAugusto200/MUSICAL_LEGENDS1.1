import ReactPlayer from "react-player"
import Leccion1 from "../../assets/Video/Leccion1.mp4"
function MusicaCurso(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={Leccion1} controls/>
                
                 </div>
    )
} 
export default MusicaCurso