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
  memory,
} from "../Redux/action";
import Paginado from "./Paginas";

const Home = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.activity);
  const error = useSelector((state) => state.error);
  const memoryData = useSelector((state) => state.memory);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const max = Math.max(
    Math.min(Math.ceil(countries.length / countriesPerPage)),
    1
  );

  useEffect(() => {
    if (!memoryData.length) {
      dispatch(getCountries(), byActivity(), getActivities());
    } else {
      dispatch(memory(""));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countries, activity]);

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

  return (
    <div>
      {/* contenedor */}

      <div className={styles.containerFilter}>
        <div className={styles.auxiliar}>
          {/* filtro continentes */}
          <div className={styles.filter}>
            <select onChange={handlerOrderContinents}>
              <option value="all">Select a filter</option>
              <option value="all">All continents</option>
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
          {/* filtro ordenar */}
          <div className={styles.filter}>
            <select onChange={handlerOrder}>
              <option value="all">Select a filter</option>
              <option value="Asc" key="Asc">
                A-Z
              </option>
              <option value="Desc" key="Desc">
                Z-A
              </option>
            </select>
          </div>
          {/* filtro poblacion */}
          <div className={styles.filter}>
            <select onChange={handlerOrderPopulation}>
              <option value="all">Select a filter</option>
              <option value="max" key="max">
                Max population
              </option>
              <option value="min" key="min">
                Min population
              </option>
            </select>
          </div>
          {/* filtro actividades */}
          <div className={styles.filter}>
            <select onChange={handlerOrderActivity}>
              <option value="null">Select a filter</option>
              <option value="all">All activities</option>
              {activity &&
                activity.map((activity) => (
                  <option value={activity.name} key={activity.name} onClick={() =>getCountries()}>
                    {activity.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        {/* muestro el error de la busqueda por name */}
        {error && <div>{error}</div>}
        {!error && countries.length > 0 && (
          <div className={styles.contenedor}>
            {countries
              .slice(
                (currentPage - 1) * countriesPerPage,
                currentPage * countriesPerPage
              )
              .map((pais) => {
                return (
                  <div className={styles.country} key={pais.id}>
                    <h2>{pais.name}</h2>
                    <h3>{pais.continent}</h3>
                    <Link to={"/countries/" + pais.id} key={pais.id}>
                      <img src={pais.image} alt={pais.name} />
                    </Link>
                  </div>
                );
              })}
          </div>
        )}
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
