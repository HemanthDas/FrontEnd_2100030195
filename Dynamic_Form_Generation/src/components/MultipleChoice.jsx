import { useState } from "react";
import Option from "./multiplechoice/option";
const MultipleChoice = () => {
  const [options, setOptions] = useState(["Option 1"]);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [text, setText] = useState("Here goes question...");
  const handleOptionChange = (option) => {
    setSelectedChoice(option);
  };

  return (
    <div className="multiple flexit">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {options.map((option, index) => (
        <Option
          key={index + 1}
          option={option}
          handleOptionChange={handleOptionChange}
          selectedChoice={selectedChoice}
        />
      ))}
      <button
        className="add"
        onClick={() => {
          setOptions([...options, `Option ${options.length + 1}`]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default MultipleChoice;
