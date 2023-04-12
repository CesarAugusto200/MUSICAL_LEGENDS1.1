
import React, { useState, useEffect } from 'react';
import "../../assets/Style/Foro.css"
import Navbar from "../Navbar"
const Formulario = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    usuario: '',
    texto: '',
    fecha: '',
  });

  useEffect(() => {
    obtenerComentarios();
  }, []);

  function obtenerComentarios() {
    fetch('http://localhost:8080/comentarios')
      .then(response => response.json())
      .then(data => setComentarios(data));
  }

  function agregarComentario(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoComentario)
    };
    fetch('http://localhost:8080/comentarios', requestOptions)
      .then(response => {
        if (response.ok) {
          obtenerComentarios();
          setNuevoComentario({ usuario: '', texto: '', fecha: '' });
        }
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNuevoComentario({ ...nuevoComentario, [name]: value });
  }

  return (
    <>
    <Navbar/>
    <div>
      <h2>Comentarios</h2>
      {comentarios.map(comentario => (
        <div key={comentario.id}>
          <h3>{comentario.usuario}</h3>
          <p>{comentario.texto}</p>
          <p>{comentario.fecha}</p>
        </div>
      ))}
            
      <form className='FORMULARIO' onSubmit={agregarComentario}>
        <div>
          <label>Usuario</label>
          <input type="text" name="usuario" value={nuevoComentario.usuario} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Comentario</label>
          <textarea name="texto" value={nuevoComentario.texto} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Fecha</label>
          <input type="date" name="fecha" value={nuevoComentario.fecha} onChange={handleInputChange} required />
        </div>
        <button className='FormButtom' type="submit">Agregar Comentario</button>
      </form>
    </div>
    </>

  );
};

export default Formulario;
