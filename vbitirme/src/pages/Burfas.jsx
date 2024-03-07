import React, { useState } from 'react';
import jsonData from '../data.json'; // JSON dosyanızın yolu

const Data = () => {
  // jsonData directly contains your JSON data
  const [data, setData] = useState(jsonData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Burfaş</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
          <li>{item.baslik}</li>
          <h4>Adres: {item.adres}</h4>
          <p>Telefon No: {item.telefon}</p>
          <p>Faks: {item.fax}</p>
          <p>E-Posta: {item.eposta}</p>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Data;
