import React, { useState } from 'react';
import "../../assets/Style/Agenda.css"
import Navbar from '../Navbar';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    studentNumber: '',
    email: '',
    courseType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre del alumno:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese el nombre del alumno"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="studentNumber">Número del alumno:</label>
        <input
          type="text"
          id="studentNumber"
          name="studentNumber"
          placeholder="Ingrese el número del alumno"
          required
          value={formData.studentNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese el correo electrónico"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="courseType">Tipo de curso:</label>
        <select
          id="courseType"
          name="courseType"
          required
          value={formData.courseType}
          onChange={handleChange}
        >
          <option value="">Seleccione el tipo de curso</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>
      <button type="submit" className="btn-submit">
        Enviar
      </button>
    </form>
    </>
  );
}

export default Form;
