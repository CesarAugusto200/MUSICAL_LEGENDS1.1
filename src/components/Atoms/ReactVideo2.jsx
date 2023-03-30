import ReactPlayer from "react-player"
import CLASESDECANTO from "../assets/Video/CLASESDECANTO.mp4"
function ReacVideo2(){
    return(
            <div className="Video">
                   
                   <ReactPlayer url={CLASESDECANTO} controls/>
                
                 </div>
    )
} 
export default ReacVideo2