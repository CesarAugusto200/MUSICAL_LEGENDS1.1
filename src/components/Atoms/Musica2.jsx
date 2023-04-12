import Leccion2 from "../../assets/Video/Leccion2.mp4"
import ReactPlayer from "react-player"
function Musica2(){
    return(
        <div className="Video1">

            <ReactPlayer url={Leccion2} controls/>
        </div>
    )
}
export default Musica2