import CLASESDECANTO from "../../assets/Video/CLASESDECANTO.mp4"
import ReactPlayer from "react-player"
import "../../assets/Style/CursosCanto.css"
function Canto1(){
    return(
        <div className="video-container">

            <ReactPlayer url={CLASESDECANTO} controls/>
        </div>
    )
}
export default Canto1