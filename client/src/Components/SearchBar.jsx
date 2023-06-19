import { useDispatch } from "react-redux";
import styles from "../styles/SearchBar.module.css";
import { getCountriesByName } from "../Redux/action";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('') 

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    dispatch(getCountriesByName(value));
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        onChange={handleChangeName}
        value={name}
      />
      <button
        onClick={() => {
          onSearch(name);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
