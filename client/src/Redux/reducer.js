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
  ERROR_NAME,
  MEMORY_STATUS,
} from "./variables";

const initialState = {
  countries: [],
  memory: [],
  allContinents: [],
  allActivities: [],
  detail: [],
  activity: [],
  error: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    //mostramos todos los paises
    case GET_COUNTRIES:
      return {
        ...state,
        allContinents: action.payload,
        countries: action.payload,
        allActivities: action.payload,
      };
    //buscamos un pais por nombre
    case GET_COUNTRIES_NAME:
      return {
        ...state,
        error: "",
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
          if (asc === "all") {
            return {
              ...state,
              countries: state.countries,
            };
          }
          if (asc.toLowerCase() === "asc") {
            return a.name.localeCompare(b.name);
          }
          return b.name.localeCompare(a.name);
        }),
        memory: state.countries,
      };

    // filtracion por continente
    case FILTER_FOR_CONTINENT:
      const allContinents = state.allContinents;
      const continentFilter =
        action.payload.continente === "all"
          ? allContinents
          : allContinents.filter(
              (pais) => pais.continent === action.payload.continente
            );
      return {
        ...state,
        countries: continentFilter,
        memory: continentFilter,
      };
    //ordenamos por poblacion
    case BY_POPULATIONS:
      const min = action.payload.min;
      return {
        ...state,
        countries: state.countries.sort((a, b) => {
          if (min === "all") {
            return {
              ...state,
              countries: state.countries,
            };
          }
          if (min.toLowerCase() == "min") {
            return a.population - b.population;
          }
          return b.population - a.population;
        }),
        memory: state.countries,
      };
    // ordenamos por actividad
    case BY_ACTIVITY:
      const allActivities = state.allActivities;
      const activityFilter =
        action.payload.all === "all"
          ? allActivities.filter((x) => x.Activities.length > 0)
          : allActivities.filter((pais) =>
              pais.Activities.find(
                (activity) => activity.name === action.payload.all
              )
            );
      return {
        ...state,
        countries: activityFilter,
        memory: activityFilter,
      };
    case ERROR_NAME:
      return {
        ...state,
        error: action.error,
      };
    case MEMORY_STATUS:
      if (action.payload === "") {
        return {
          ...state,
          countries: state.memory,
        };
      }
    default:
      return state;
  }
}
