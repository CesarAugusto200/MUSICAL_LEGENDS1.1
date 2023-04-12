import  CantoProfesional from "../../assets/Video/CantoProfesional.mp4"
import ReactPlayer from "react-player"
import "../../assets/Style/CursosCanto.css"
function Canto3(){
    return(
        <div className="video-container">

            <ReactPlayer url={CantoProfesional} controls/>
        </div>
    )
}
export default Canto3