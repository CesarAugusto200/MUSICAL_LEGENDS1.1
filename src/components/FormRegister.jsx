
function FormRegister(){
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://localhost:8080/users/register'

    const handlerClick = (e)=>{
        navigate("/Login")
        e.preventDefault();

        const newForm = new FormData(form.current)
     

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data))
        })
    }
    return(
        <>
      
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
        </>
    )
}
export default FormRegister