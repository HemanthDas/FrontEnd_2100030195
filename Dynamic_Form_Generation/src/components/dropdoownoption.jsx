import { useState } from "react";
import PropTypes from "prop-types";

const DropdownOption = ({ option, handleOptionChange, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(option);

  const handleEdit = () => {
    setIsEditing(false);
    handleOptionChange(text, index);
  };

  return (
    <div onDoubleClick={() => setIsEditing(true)}>
      {!isEditing ? (
        text
      ) : (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleEdit}>Done</button>
        </>
      )}
    </div>
  );
};

DropdownOption.propTypes = {
  option: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default DropdownOption;
