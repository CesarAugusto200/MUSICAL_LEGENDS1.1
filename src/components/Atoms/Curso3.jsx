import ReactPlayer from "react-player"
import CantoProfesional from "../../assets/Video/CantoProfesional.mp4"
function Curso3(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={CantoProfesional } controls/>
                
                 </div>
    )
} 
export default Curso3