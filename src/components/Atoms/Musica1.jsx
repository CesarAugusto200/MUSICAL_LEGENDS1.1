import Leccion1 from "../../assets/Video/Leccion1.mp4"
import ReactPlayer from "react-player"
function Musica1(){
    return(
        <div className="Video1">

            <ReactPlayer url={Leccion1} controls/>
        </div>
    )
}
export default Musica1