/*//! DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un país:
ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población.*/
import styles from "../styles/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { getDetail } from "../Redux/action";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  // const activities = detail.Activities?.map((pais) => {
  //   return {
  //     name: pais.name,
  //     difficulty: pais.difficulty,
  //     duration: pais.duration,
  //     season: pais.season,
  //   };
  // });
  
  return (
    <div>
      <div className={styles.image}>
        <img src={detail.image} alt={detail.name} />
      </div>

      <div>
        <h2>Name: {detail.name} </h2>
        <h2>Id: {detail.id} </h2>
        <h2>Continent: {detail.continent} </h2>
        <h2>Capital: {detail.capital} </h2>
        <h2>Population: {detail.population} </h2>
        <h2>Subregion: {detail.subregion} </h2>
      </div>
      <div>
        <h1>Actividades</h1>
        {detail.Activities?.length >= 0 ? (
          detail.Activities?.map((activity) => {
            return (
              <div>
                <h3>Name: {activity.name} </h3>
                <h3>Difficulty: {activity.difficulty} </h3>
                <h3>Duration: {activity.duration} </h3>
                <h3>Season: {activity.season} </h3>
              </div>
            );
          })
        ) : 
          <h3>Without activities</h3>
        }
      </div>
    </div>
  );
};

export default Details;
