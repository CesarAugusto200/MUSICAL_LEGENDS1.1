import Leccion3 from "../../assets/Video/Leccion3.mp4"
import ReactPlayer from "react-player"
function Musica3(){
    return(
        <div className="Video1">

            <ReactPlayer url={Leccion3} controls/>
        </div>
    )
}
export default Musica3