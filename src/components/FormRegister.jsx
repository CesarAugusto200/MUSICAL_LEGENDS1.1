import { useState } from "react";
import { Link } from "react-router-dom";


function FormRegister() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handlerSubmit = () => {

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  name: user.name,
  email: user.email,
  password: user.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/users/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result), alert("todo bien"))
  .catch(error => console.log('error', error), alert("todo mal"));
    }

    const hanlerchange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    return (
        <>

            <form onSubmit={handlerSubmit} className='Conteiner' >
                <div>
                    <label className='texto' htmlFor="name">Nombre</label>
                    <input type="text" id="name" onChange={hanlerchange} name="name" />
                </div>

                <div>
                    <label className='texto' htmlFor="name">Correo electrónico</label>
                    <input type="email" name="email" id="email" onChange={hanlerchange} />
                </div>

                <div>
                    <label className='texto'>Password</label>
                    <input type="password" onChange={hanlerchange} name='password' />
                </div>

                <button className='boton' type="submit">Registrarse</button>
            </form>
        </>
    )
}
export default FormRegister