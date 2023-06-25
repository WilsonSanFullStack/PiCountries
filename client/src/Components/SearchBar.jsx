import { useDispatch } from "react-redux";
import styles from "../styles/SearchBar.module.css";
import { getCountriesByName, memory } from "../Redux/action";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('') 
  
  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    dispatch(getCountriesByName(value));
    if (name === '' || name === name) {
      dispatch(memory(value))
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Backspace' && name === '') {
      dispatch(memory(''));
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={handleChangeName}
        onKeyUp={handleKeyUp}
        value={name}
        placeholder="write name country"
      />
      
    </div>
  );
};

export default SearchBar;
