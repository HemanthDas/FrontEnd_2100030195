import { useState } from "react";
import PropTypes from "prop-types";

const Option = ({ handleOptionChange, option, selectedChoice }) => {
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
            type="radio"
            name="options"
            value={text}
            checked={selectedChoice === text}
            onChange={() => handleOptionChange(text)}
          />
          {text}
        </>
      ) : (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
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

Option.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  selectedChoice: PropTypes.string.isRequired,
};

export default Option;
