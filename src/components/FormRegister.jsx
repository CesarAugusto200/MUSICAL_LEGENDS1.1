import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../assets/Style/Login.css"

function FormRegister() {
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
          <label className="texto" htmlFor="name">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
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
          Registrarse
        </button>
      </form>
    </>
  );
}
export default FormRegister;