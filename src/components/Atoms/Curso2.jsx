import ReactPlayer from "react-player"
import CLASESDECANTO from "../../assets/Video/CLASESDECANTO.mp4"


function Curso2(){
    return(
      <>
      
            <div className="Video1">
                   
                   <ReactPlayer url={CLASESDECANTO} controls/>
                
                 </div>
                
      </>
    )
} 
export default Curso2