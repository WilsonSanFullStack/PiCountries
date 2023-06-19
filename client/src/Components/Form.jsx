import styles from "../styles/Form.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities, newActivity } from "../Redux/action.js";
import { useNavigate } from "react-router-dom";

const validaciones = (input) => {
  let error = {};

  if (input.name) {
    return (error.name = "Name Requiered");
  } else if (input.difficulty) {
    return (error.difficulty = "Difficulty Requered");
  } else if (input.countries.length) {
    return (error.countries = "You must select at least one country");
  }
  return error;
};

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const [error, setError] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const navigate = useNavigate();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validaciones({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDifficulty = (event) => {
    setInput({
      ...input,
      difficulty: event.target.value,
    });
    setError(
      validaciones({
        ...input,
        [event.target.difficulty]: event.target.value,
      })
    );
  };

  const handleDuration = (event) => {
    setInput({
      ...input,
      duration: event.target.value,
    });
  };

  const handleSeason = (event) => {
    setInput({
      ...input,
      season: event.target.value,
    });
  };

  const handleCountry = (id) => {
    setInput({
      ...input,
      countries: [...input.countries, id.target.value],
    });
  };

  const handleDelete = (data) => {
    setInput({
      ...input,
      countries: input.countries.filter((pais) => pais !== data),
    });
  };

  const handleCreate = (data) => {
    data.preventDefault();
    dispatch(newActivity(input));

    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });

    // Mostrar mensaje de confirmación
    setConfirmationMessage('Activity created successfully.');

    // Redirigir a la página de inicio después de un breve retraso
    setShowForm(false);
    setTimeout(() => {
      setConfirmationMessage("");
      navigate("/home");
    }, 2000); // Retraso de 2 segundos
  };

  const difficulty = [1, 2, 3, 4, 5];
  const duration = [
    "Has No Duration",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];
  const season = ["Has No Seasons", "Winter", "Spring", "Autumn", "Summer"];

  return (
    <div className={styles.containerg}>
      {confirmationMessage && <div className={styles.aviso}><h1>{confirmationMessage}</h1></div>}
      {showForm && (
      <div className={styles.container}>
        
        <h1>Create Activity</h1>
        <div>
          <form onSubmit={handleCreate}>
            <section className={styles.activity}>
              <label>Activity: </label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                placeholder="Name Activity"
                required
              />
              {error.name && <p>{error.name}</p>}
            </section>

            <section className={styles.difficulty}>
              <label>Difficulty: </label>
              <select onChange={handleDifficulty} required>
                <option value="" hidden>
                  Select an Option
                </option>
                {difficulty.map((difficulty) => (
                  <option value={difficulty} name="difficulty" key={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </section>

            <section className={styles.duration}>
              <label>Duration: </label>
              <select onChange={handleDuration}>
                <option value="" hidden>
                  Select an Option
                </option>
                {duration.map((duration) => (
                  <option value={duration} name="duration" key={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </section>

            <section className={styles.season}>
              <label>Season: </label>
              <select onChange={handleSeason}>
                <option value="" hidden>
                  Select an Season
                </option>
                {season.map((season) => (
                  <option value={season} name="season" key={season}>
                    {season}
                  </option>
                ))}
              </select>
            </section>

            <section className={styles.country}>
              <label>Country: </label>
              <select onChange={handleCountry} required>
                <option value="" hidden>
                  Select Country/es
                </option>
                {countries.map((country) => (
                  <option value={country.id} name="countries" key={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </section>

            <section className={styles.close}>
              <label>List Countries</label>
              <ol>
                {input.countries.map((country) => (
                  <li key={country}>
                    <div className={styles.listCountry}>
                      <p>{country}</p>
                      <button
                        onClick={() => {
                          handleDelete(country);
                        }}
                      >
                        <img src="/imagen/close.png" alt="close" />
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.send}>
              <button type="submit">Create Activity</button>
            </section>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Form;
