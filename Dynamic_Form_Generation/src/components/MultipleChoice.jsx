import { useState } from "react";

const MultipleChoice = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleOptionChange = (option) => {
    setSelectedChoice(option);
  };
  
  return (
    <div className="multiple flexit">
      <input type="text" value={"Here goes question..."} onChange={()=>{}}/>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedChoice === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MultipleChoice;
