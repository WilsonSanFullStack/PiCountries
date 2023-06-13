/*//! HOME PAGE | la página principal de tu SPA debe contener:
SearchBar: un input de búsqueda para encontrar países por nombre.
Sector en el que se vea un listado de cards con los países. Al
iniciar deberá cargar los primeros resultados obtenidos desde la
ruta
GET /countries y deberá mostrar su:
Imagen de la bandera.
Nombre.
Continente.
Cuando se le hace click a una Card deberá redirigir al detalle de
ese país específico.
Botones/Opciones para filtrar por continente y por tipo de
actividad turística.
Botones/Opciones para ordenar tanto ascendentemente como
descendentemente los países por orden alfabético y por cantidad de
población.
Paginado: el listado de países se hará por partes. Tu SPA debe
contar con un paginado que muestre un total de 10 países por página
*/
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getActivities,
  getCountries,
  orderCountriesSort,
  filterCountriesForCotinent,
  byPopulations,
  byActivity,
} from "../Redux/action";
import Paginado from "./Paginas";

const Home = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.activity);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const max = Math.round(countries.length / countriesPerPage);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(byActivity());
  }, [dispatch]);

  const handlerOrder = (data) => {
    data.preventDefault();
    dispatch(orderCountriesSort(data.target.value));
    setOrder(data.target.value);
  };

  const handlerOrderContinents = (data) => {
    data.preventDefault();
    dispatch(filterCountriesForCotinent(data.target.value));
    setOrder(data.target.value);
  };

  const handlerOrderPopulation = (data) => {
    data.preventDefault();
    dispatch(byPopulations(data.target.value));
    setOrder(data.target.value);
  };

  const handlerOrderActivity = (data) => {
    data.preventDefault();
    dispatch(byActivity(data.target.value));
    setOrder(data.target.value);
  };

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>
          <select onChange={handlerOrderContinents}>
            <option value="all" key="all">
              All continents
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="Antarctica" key="Antarctica">
              Antarctica
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="North America" key="North America">
              North America
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
            <option value="South America" key="South America">
              South America
            </option>
          </select>
        </div>

        <div>
          <select onChange={handlerOrder}>
            <option value="Asc" key="Asc">
              A-Z
            </option>
            <option value="Desc" key="Desc">
              Z-A
            </option>
          </select>
        </div>

        <div>
          <select onChange={handlerOrderPopulation}>
            <option value="max" key="max">
              Max population
            </option>
            <option value="min" key="min">
              Min population
            </option>
          </select>
        </div>

        <div>
          <select onChange={handlerOrderActivity}>
            <option value="all">All activities</option>
            {activity.map((activity) => (
              <option value={activity.id} key={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className={styles.contenedor}>
          {countries
            .slice(
              (currentPage - 1) * countriesPerPage,
              currentPage * countriesPerPage
            )
            .map((pais) => {
              return (
                <div className={styles.country } key={pais.id} >
                  <h2>{pais.name}</h2>
                  <Link to={"/countries/" + pais.id} key={pais.id}>
                    <img src={pais.image} alt={pais.name} />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.pagina}>
        <Paginado
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          max={max}
        />
      </div>
    </div>
  );
};

export default Home;
