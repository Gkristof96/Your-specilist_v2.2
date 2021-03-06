import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import classes from "./SearchBar.module.css";

import AutocompleteInput from "./AutocompleteInput";

import { getCityData, getProfessionData } from "../../actions/searchActions";

const SearchBar = (props) => {
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");

  const cityInputHandler = (value) => setCity(value);
  const professionInputHandler = (value) => setProfession(value);

  const dispatch = useDispatch();

  const getCity = useSelector((state) => state.getCity);
  const { cities } = getCity;

  const getProfession = useSelector((state) => state.getProfession);
  const { professions } = getProfession;

  useEffect(() => {
    if (cities.length === 0 || professions.length === 0) {
      dispatch(getCityData());
      dispatch(getProfessionData());
    }
    // eslint-disable-next-line
  }, []);

  const searchHandler = () => {
    props.onSearchProviders(city, profession);
  };

  return (
    <div className={classes["search-bar"]}>
      <AutocompleteInput
        setInput={cityInputHandler}
        items={cities}
        placeholder='Települések'
        value={city}
      />
      <AutocompleteInput
        setInput={professionInputHandler}
        items={professions}
        placeholder='Szakma'
        value={profession}
      />
      <span onClick={searchHandler}>
        <FaSearch className={classes.icon} />
      </span>
    </div>
  );
};

export default SearchBar;
