
import "../assets/Style/Home.css"
import FondoMusical from "../assets/Video/FondoMusical.mp4"

function Home(){
    return(
       

            <div className="Cover-conteiner">
    
            <video className="video" src={FondoMusical} autoPlay loop muted></video>
        </div>
         
   
      
    
    )
}
export default Home;