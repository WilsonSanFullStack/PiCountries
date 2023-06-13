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

const initialState = {
  countries: [],
  allContinents: [],
  detail: [],
  activity: [],
  allActivities: [],
  population: [],
  filteredCountries: [],
  loading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    //mostramos todos los paises
    case GET_COUNTRIES:
      return {
        ...state,
        allContinents: action.payload,
        countries: action.payload,
        population: action.payload,
        allActivities: action.payload,
        filteredCountries: action.payload,
        //searchName: action.payload,
      };
    //buscamos un pais por nombre
    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    // mostramos el detalle de un pais
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    //creamos una nueva actividad
    case POST_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    // mostramos todas las actividades
    case GET_ACTIVITIES:
      return {
        ...state,
        activity: action.payload,
      };
    // ordenar paises
    case SORT:
      const asc = action.payload.asc;
      
      return {
        ...state,
        countries: state.countries.sort((a, b) => {
          if (asc.toLowerCase() === "asc") {
            return a.name.localeCompare(b.name);
          }
          return b.name.localeCompare(a.name);
        }),
      }
    
    // filtracion por continente
    case FILTER_FOR_CONTINENT:
  const continente = action.payload.continente.toLowerCase();

  if (continente === "all") {
    return {
      ...state,
      countries: state.countries.sort((a, b) =>
        a.continent.localeCompare(b.continent)
      ),
    };
  }

  const filteredCountries = state.countries.filter(
    (pais) => pais.continent.toLowerCase() === continente
  );

  return {
    ...state,
    countries: filteredCountries,
  };

    //ordenamos por poblacion
    case BY_POPULATIONS:
      const min = action.payload.min;
      return {
        ...state,
        population: state.population.sort((a, b) => {
          if (min.toLowerCase() == "min") {
            return a.population - b.population;
          }
          return b.population - a.population;
        }),
      };
    // ordenamos por actividad
    case BY_ACTIVITY:
      const all = action.payload.all;
      return {
        ...state,
        allActivities: state.countries.filter((pais) => {
          if (all.toLowerCase() === "all") {
            return pais.activities.length > 0;
          }
          return pais.activities.some(
            (activity) => activity.name.toLowerCase() === all.toLowerCase()
          );
        }),
      };

    default:
      return state;
  }
};