import { useState } from "react";
import styles from '../styles/SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  // const [name, setName] = useState("");

  // const handleChange = (event) => {
  //   setId(event.target.value);
  // };

  return (
    <div className={styles.search}>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
