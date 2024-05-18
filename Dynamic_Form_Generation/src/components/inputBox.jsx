import React from "react";
import MultipleChoice from "./MultipleChoice";

const InputBox = () => {
  const [type, setType] = React.useState("m");
  return (
    <div className="input-box main">
      <MultipleChoice />
      <select
        onChange={(e) => {
          alert(e.target.value);
        }}
        id="input-type"
      >
        <option value="m">Multiple choice</option>
        <option value="s">Short answer</option>
        <option value="p">Paragraph</option>
        <option value="c">Checkbox</option>
        <option value="d">Dropdown</option>
      </select>
    </div>
  );
};

export default InputBox;
