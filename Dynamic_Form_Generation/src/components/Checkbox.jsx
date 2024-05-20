import { useState } from "react";
import Option from "./checkbox/option";
import EditableText from "./EditableText";

const Checkbox = () => {
  const [options, setOptions] = useState([
    { text: "Option 1", isChecked: false },
    { text: "Option 2", isChecked: false },
  ]);

  const handleOptionChange = (newText, index) => {
    const newOptions = [...options];
    newOptions[index].text = newText;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (index) => {
    const newOptions = [...options];
    newOptions[index].isChecked = !newOptions[index].isChecked;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([
      ...options,
      { text: `Option ${options.length + 1}`, isChecked: false },
    ]);
  };
  return (
    <div className="checkbox">
      <EditableText />
      {options.map((option, index) => (
        <Option
          key={index}
          option={option.text}
          isChecked={option.isChecked}
          handleOptionChange={(newText) => handleOptionChange(newText, index)}
          handleCheckboxChange={() => handleCheckboxChange(index)}
        />
      ))}
      <button onClick={addOption}>Add Option</button>
    </div>
  );
};

export default Checkbox;
