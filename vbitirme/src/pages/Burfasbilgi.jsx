//.import React, { useEffect, useState } from "react";
//.import Burfassube from "../data/dataveri";
//.import { v4 as uuidv4 } from "uuid";


function Burfasbilgi() {
  return (
    <div>
        <div className="text-center ">
      {dataveri.map((item) => (
        <div key={uuidv4()} className="card">
          <h2>{item.baslik}</h2>
          <img className="rounded mx-auto d-block" src={item.thumb} width="65%" />
          <h4>Adres: {item.adres}</h4>
          <p>Telefon No: {item.telefon}</p>
          <p>Faks: {item.fax}</p>
          <p>E-Posta: {item.eposta}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Burfasbilgi