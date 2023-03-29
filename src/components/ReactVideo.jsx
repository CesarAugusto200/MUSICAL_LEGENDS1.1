import ReactPlayer from "react-player"
import CantoIntermedio from "../assets/Video/CantoIntermedio.mp4"
function ReacVideo(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={CantoIntermedio} controls/>
                
                 </div>
    )
} 
export default ReacVideo