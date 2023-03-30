
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Style/Login.css"
function FormLogin(){
    const [email , setEmail] = useState("")
     const [password , setPassword] = useState("")
     const handleSubmit=(event)=>{

        setEmail(document.getElementById ('email').value);
        setPassword(document.getElementById ('password').value);

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var raw = JSON.stringify({
  email: "cesar@gmail.com",
  password: "cesar1234"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
    

fetch("http://localhost:8080/users/login", requestOptions)
  .then(response => response.JSON())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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
               <button className="boton" type="button" onClick={handleSubmit}>Inicar session</button>
               <Link className="link" to="/register">No tienes cuenta? Registrate aqui</Link>
     
       </form>

       
    </div>

       
        </>
    )
}
export default FormLogin