import { IoIosSearch } from "react-icons/io";
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";


function SearchBox({search, setSearch, searchHandler}) {
  return (
    <div className={styles.search}>
        <input 
        type="text" 
        placeholder="Search Title" 
        value={search} 
        onChange={(event) => 
        setSearch(event.target.value.toLowerCase())}
        />
        <button onClick={searchHandler}><IoIosSearch /></button>
    </div>
    
  );
}

SearchBox.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func.isRequired,
    searchHandler: PropTypes.func.isRequired,
  };

export default SearchBox