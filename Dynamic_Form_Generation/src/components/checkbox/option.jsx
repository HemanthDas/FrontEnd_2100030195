import { useState } from "react";
import PropTypes from "prop-types";

const CheckboxOption = ({ handleOptionChange, option, isChecked, handleCheckboxChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(option);

  return (
    <label
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {text}
        </>
      ) : (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              setIsEditing(false);
              handleOptionChange(text);
            }}
          >
            Done
          </button>
        </>
      )}
    </label>
  );
};

CheckboxOption.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CheckboxOption;
