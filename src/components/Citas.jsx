import {Formik} from "formik"
import "../assets/Style/Citas.css"
function Citas(){
  const handleSubmit=(event)=>{ 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name":  nombre,
      "phone": telefono,
      "email": email,
      "courseType": servicio,

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

               

<form className="formulario" >

<div className="contenedor">
<label htmlFor="nombre">Nombre del Alumno</label>

<input    name="nombre"  id="nombre" placeholder="Nombre"  onChange={e => setName(e.target.value)} />
</div>


<div>
<label className="contenedor" htmlFor="producto">Tipo De Curso</label>
 
<input   name="productos"  id="producto" placeholder="Curso" onChange={e => setName(e.target.value)} />
</div>



<div className="contenedor">
<label htmlFor="cantidad">Nivel Del Curso</label>

<input   name="cantidad"   id="cantidad" placeholder="Nivel Del Curso"  onChange={e => setName(e.target.value)} />  
</div>





  <button className="boton" type="submit">Enviar</button>

</form>





  

</Formik>

        </>
        
    )
}
export default Citas