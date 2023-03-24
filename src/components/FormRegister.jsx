
function FormRegister(){
    const handlerClick =(e)=>{
        e.prevenDefault();
    }
    return(
        <form className='Conteiner' >
        <div>
            <label className='texto' htmlFor="name">Nombre</label>
            <input type="text" id="name" name="nombre" />
        </div>

        <div>
            <label className='texto'>Usuario
                <input type="text" name="usuario"/>
            </label>
        </div>

        <div>
            <label  className='texto' htmlFor="name">Correo electrónico</label>
            <input type="text" id="name" name="correo" />
        </div>

        <div>
            <label className='texto'>Password</label>
            <input type="password" name='contrasenia' />
        </div>

        <button className='boton' type="button" onClick={handlerClick}>Registrarse</button>
    </form>
    )
}
export default FormRegister