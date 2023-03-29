
import { Link } from "react-router-dom";
import "../assets/Style/Login.css"
function FormLogin(){
    const handlerClick =(e) =>{
        e.preventDefaul();
    }
    return(
        <>
               
        <div>
     
                   <form className="Conteiner"  > 
                   <div className="datos">
               <label className="texto">Usuario
                   <input className="dat" type="text"  id="usuario" name="usuario"/>
               </label>
           </div>

           <div>
           <div>
               <label className="texto">Password</label>
               <input type="password" id="contrasenia" name='contrasenia' />
           </div>
               </div>
               <button className="boton" type="button" onClick={handlerClick}>Inicar session</button>
               <Link className="link" to="/register">No tienes cuenta? Registrate aqui</Link>
     
       </form>

       
    </div>

       
        </>
    )
}
export default FormLogin