import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
import "../assets/Style/Registro.css"
function RegistrationForm() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: value.name,
      email: value.email,
      password: value.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/users/register", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result)
      })
      .catch((error) => {
        alert("todo mal" + error)
      });
    navigate("/");
  };


  return (
    <form className="registration-form"  onSubmit={handleSubmit(onSubmit)}>
      <h2>Registrarse</h2>
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
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese su correo electrónico"
          {...register("email", {
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
    
      <button type="submit" className="btn-register">
        Registrarse
      </button>
    </form>
  );
}

export default RegistrationForm;
