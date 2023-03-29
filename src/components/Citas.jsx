import {Formik} from "formik"
import "../assets/Style/Citas.css"
function Citas(){
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