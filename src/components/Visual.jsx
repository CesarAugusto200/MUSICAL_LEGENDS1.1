import React, { useState, useEffect } from 'react';
import "../assets/Style/Table.css"
function MyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/citas/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Numero</th>
        
          
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
