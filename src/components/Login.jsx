
import { Link , useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form";
import "../assets/Style/Login.css"
import React, { useState } from 'react';

function LoginForm() {
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
    <form
     className="login-form"  onSubmit={handleSubmit(onSubmit)}>
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingrese su nombre de usuario"
          {...register("name", {
            required: {
              value: true,
              message: "Necesitas este campo",
            },
          })}
        
       
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
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
      <button type="submit" className="btn-login">
        Iniciar sesión
      </button>
      <Link className="link" to="/Registro">No tienes cuenta? Registrate aqui</Link>
    </form>
  );
}

export default LoginForm;
