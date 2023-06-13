import styles from '../styles/Paginado.module.css'
import React, { useState } from "react";

const Paginado = ({ currentPage, setCurrentPage, max }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(parseInt(currentPage) - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setCurrentPage(parseInt(event.target.value));
      if (parseInt(event.target.value < 1) || parseInt(event.target.value) > Math.ceil(max) || isNaN(parseInt(event.target.value))) {
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.image}>
      <button disabled={currentPage <= 1} onClick={previousPage}>
        <img src="imagen/arrow-left.png" alt="left" />
      </button>
      </div>

      <div className={input}>
      <input
        onChange={(event) => onChange(event)}
        onKeyDown={(event) => onKeyDown(event)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> of {max} </p>
      </div>

      <div className={styles.image}>
      <button disabled={currentPage >= Math.ceil(max)} onClick={nextPage}>
        <img src="imagen/right-arrow.png" alt="rigth" />
      </button>
      </div>
    </div>
  );
};
export default Paginado;
