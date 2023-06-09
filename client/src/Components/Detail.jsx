/*//! DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un país:
ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población.*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailPage from './DetailPage';

const CountryDetails = ({ match }) => {
  const [country, setCountry] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    axios.get(`http://localhost:3001/countries/${id}`)
      .then(response => {
        setCountry(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {country ? <DetailPage country={country} /> : <p>Loading...</p>}
    </div>
  );
};

export default CountryDetails;