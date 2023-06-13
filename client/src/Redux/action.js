import axios from "axios";

import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRIES_NAME,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_FOR_CONTINENT,
  SORT,
  BY_POPULATIONS,
  BY_ACTIVITY,
} from "./variables";

//urls
const URL = "http://localhost:3001";
const COUNTRIES = "countries";
const ACTIVITY = "activity";

//mostramos todos los paises
export const getCountries = () => {
  try {
    const endpoint = `${URL}/${COUNTRIES}`;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    };
  } catch (error) {
    alert(
      `Ocurrió un error al obtener los países. Por favor, inténtalo de nuevo. ${error.message}`
    );
  }
};
// mostramos el detalle de un pais
export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `${URL}/${COUNTRIES}/${id}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert(`No se encontraron los detalles de ${id}: ${error.message}`);
    }
  };
};
//buscamos un pais por nombre
export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const endpoint = `${URL}/${COUNTRIES}?name=${name}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_COUNTRIES_NAME,
        payload: data,
      });
    } catch (error) {
      alert(
        `Ocurrió un error al buscar los países por nombre: ${error.message}`
      );
    }
  };
};
//creamos una nueva actividad
export const newActivity = (newdata) => {
  return async (dispatch) => {
    try {
      const endpoint = `${URL}/${ACTIVITY}`;
      const { data } = await axios.post(endpoint, newdata);

      dispatch({
        type: POST_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      alert(`No se pudo crear la actividad: ${error.message}`);
    }
  };
};
// mostramos todas las actividades
export const getActivities = () => {
  return async (dispatch) => {
    try {
      const endpoint = `${URL}/${ACTIVITY}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      alert(`No se pudieron encontrar las activiades: ${error.message}`);
    }
  };
};
// filtracion por continente
export const filterCountriesForCotinent = (payload) => {
  return {
    type: FILTER_FOR_CONTINENT,
    payload: {
      continente: payload,
    },
  };
};
// ordenar paises
export const orderCountriesSort = (payload) => {
  return {
    type: SORT,
    payload: {
      asc: payload,
    },
  };
};
//ordenamos por poblacion
export const byPopulations = (payload) => {
  return {
    type: BY_POPULATIONS,
    payload: {
      min: payload,
    },
  };
};
// ordenamos por actividad
export const byActivity = (payload) => {
  return {
    type: BY_ACTIVITY,
    payload: {
      all: payload,
    },
  };
};
