import styles from "./Dropdown.module.css";
import { useState } from "react";

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState(false);

  const showOptions = () => {
    setOptionsVisibility((currentVisibility) => {
      return !currentVisibility;
    });
  };

  const optionClickHandler = (event) => {
    setSelectedOption(event.target.outerText);
    setOptionsVisibility((currentVisibility) => {
      return !currentVisibility;
    });
    props.onChange(event.target.outerText);
  };

  return (
    <div className={styles.dropdown}>
      <input
        className={optionsVisibility && styles.clicked}
        placeholder={props.placeholder}
        readOnly
        onClick={showOptions}
        value={selectedOption}
      />
      <div className={`${styles.options} ${optionsVisibility && styles.show}`}>
        {props.options.map((option) => (
          <div key={option} onClick={optionClickHandler}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
