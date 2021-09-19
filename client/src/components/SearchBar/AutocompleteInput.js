import { useState } from "react";
import style from "./AutocompleteInput.module.scss";

const AutocompleteInput = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      setSuggestions(props.items.sort().filter((v) => regex.test(v)));
      setShowSuggestions(true);
    }
    props.setInput(value);
  };

  const suggestionChangeHandler = (value) => {
    if (suggestions.length > 0) {
      props.setInput(value);
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setShowSuggestions(false);
  };

  const openSuggestionHandler = () => {
    props.setInput("");
    setShowSuggestions(true);
  };

  return (
    <div
      className={`${style["auto-input"]} ${style[`${props.size}`]} ${
        style[`${props.type}`]
      }`}
    >
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={inputChangeHandler}
        onFocus={openSuggestionHandler}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className={style[`${props.size}`]}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => suggestionChangeHandler(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AutocompleteInput.defaultProps = {
  size: "large",
  type: "rounded",
};

export default AutocompleteInput;
