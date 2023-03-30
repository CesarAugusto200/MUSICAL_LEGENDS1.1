import ReactPlayer from "react-player"
import Leccion2 from "../../assets/Video/Leccion2.mp4"
function MusicaCurso2(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={Leccion2} controls/>
                
                 </div>
    )
} 
export default MusicaCurso2