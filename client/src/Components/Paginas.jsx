import styles from "../styles/Paginado.module.css";
import React, { useState, useEffect } from "react";

const Paginado = ({ currentPage, setCurrentPage, max }) => {
  const [input, setInput] = useState(currentPage);
  const [inputValue, setInputValue] = useState(currentPage);

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
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(max) ||
        isNaN(parseInt(event.target.value)) || parseInt(event.target.value) <= 0 
      ) {
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    setInput(value);
  
    if (value === "") {
      setInputValue(value);
    } else {
      const page = parseInt(value);
      if (page >= 1 && page <= Math.max(1, Math.ceil(max)) && !isNaN(page)) {
        setInputValue(page);
      }
    }
  };

  useEffect(() => {
    setInput(currentPage);
    setInputValue(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.contenedor}>
      <div className={styles.image}>
        <button disabled={currentPage <= 1} onClick={previousPage}>
          <img src="imagen/arrow-left.png" alt="left" />
        </button>
      </div>

      <div className={styles.input}>
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
