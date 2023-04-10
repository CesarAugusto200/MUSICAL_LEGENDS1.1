import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../assets/Style/Login.css"

function FormLogin() {
    const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: value.name,
     
      password: value.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert("Bienvenido" + result)
      })
      .catch((error) => {
        alert("todo mal" + error)
      });
    navigate("/Home");
  };

  return (
    
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={"off"}
        className="Conteiner"
      >
        <div>
          <label className="texto" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
            })}
          />
        </div>

     
        <div>
          <label className="texto">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
        </div>

        <button 
          className="boton"
          type="buton"
        >
          Login
        </button>
        <Link className="link" to="/register">No tienes cuenta? Registrate aqui</Link>
      </form>
    </>
  );
}
export default FormLogin;