import React  from "react";
import { Link } from "react-router-dom";
import "../assets/Style/Citas.css"
import {Formik} from "formik"
import { useState } from "react";

function citas(){


  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState(0)
  const [courseType, setcourseType] = useState("")

  const handleSubmit=()=>{ 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name":  name,
      "phone": phone,
      "email": email,
      "courseType": courseType
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/citas/save", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      

  }





 



        return(
          <>
          
          <Formik>

             

          <form onSubmit={handleSubmit()} className="formulario" >



            
          <div>
          <label htmlFor="nombre">Nombre del Alumno</label>
          
          <input    name="nombre"  id="name" placeholder="Nombre"  onChange={e => setName(e.target.value)} />
          </div>


          <div>
          <label htmlFor="Numero">Numero del Alumno</label>
           
          <input   name="Numero"  id="phone" placeholder="Numero" onChange={e => setPhone(e.target.value)} />
          </div>



          <div>
          <label htmlFor="Correo">Correo electrónico</label>
          
          <input   name="Correo"   id="email" placeholder="Correo electronico"  onChange={e => setEmail(e.target.value)} />  
          </div>

          
          <div>
          <label htmlFor="CoruseType">Tipo de Curso</label>
           
          <input   name="tipoCurso"    id=" courseType" placeholder="Tipo de curso"  onChange={e => setcourseType(e.target.value)} /> 
          </div>


            <button className="boton" type="submit">Enviar</button>
          </form>

        
       
          </Formik>

          <Link className="link1" to="/Visual">Lista De Citas</Link>
          </>
        )

}
  
     
    

export default citas;