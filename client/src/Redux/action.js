import axios from "axios";

//mostramos todos los paises

export const getCountries = () => {
  try {
    const endpoint = "http://localhost:3001/countries";
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: "GET_COUNTRIES",
        payload: data,
      });
    };
  } catch (error) {
    alert(
      `Ocurrió un error al obtener los países. Por favor, inténtalo de nuevo. ${error.message}`
    );
  }
};
//buscamos un pais por id

export const getCountriesById = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/countries?name=${id}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: "GET_COUNTRIES_DETAIL",
        payload: data,
      });
    } catch (error) {
      alert(`Ocurrió un error al buscar el país por id: ${error.message}`);
    }
  };
};

// mostramos el detalle de un pais

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/countries?name=${id}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: "GET_DETAIL",
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
      const endpoint = `http://localhost:3001/countries?name=${name}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: "GET_COUNTRIES_NAME",
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
      const endpoint = "http://localhost:3001/activity";
      const { data } = await axios.post(endpoint, newdata);

      dispatch({
        type: "POST_ACTIVITY",
        payload: data,
      });
    } catch (error) {
      alert(`No se pudo crear la actividad: ${data}: ${error.message}`);
    }
  };
};

// mostramos todas las actividades

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/activity";
      const { data } = await axios.get(endpoint);

      dispatch({
        type: "GET_ACTIVITIES",
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
    type: "FILTER_FOR_CONTINENT",
    payload,
  };
};

// ordenar paises
export const setCountriesSort = (payload) => {
  return {
    type: "SORT",
    payload: {
      asc: payload,
    },
  };
};
