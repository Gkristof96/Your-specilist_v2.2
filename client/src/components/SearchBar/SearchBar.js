import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.scss";

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
    dispatch(getCityData());
    dispatch(getProfessionData());
  }, [dispatch]);

  const searchHandler = () => {
    props.onSearchProviders(city, profession);
  };

  return (
    <div className={style["search-bar"]}>
      <AutocompleteInput
        setInput={cityInputHandler}
        items={cities}
        placeholder="Települések"
        value={city}
      />
      <AutocompleteInput
        setInput={professionInputHandler}
        items={professions}
        placeholder="Szakma"
        value={profession}
      />
      <span onClick={searchHandler}>
        <FaSearch className={style.icon} />
      </span>
    </div>
  );
};

export default SearchBar;
