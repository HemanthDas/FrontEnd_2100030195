import { useState } from "react";
import DropdownOption from "./dropdoownoption";
import EditableText from "./EditableText";

const Dropdown = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (newText, index) => {
    const newOptions = [...options];
    newOptions[index] = newText;
    setOptions(newOptions);
    if (selectedOption === options[index]) {
      setSelectedOption(newText);
    }
  };

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  return (
    <div>
      <EditableText />
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>
        {options.map((option, index) => (
          <DropdownOption
            key={index}
            option={option}
            handleOptionChange={handleOptionChange}
            index={index}
          />
        ))}
      </div>
      <button onClick={addOption}>Add Option</button>
    </div>
  );
};

export default Dropdown;
