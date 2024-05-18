import React from "react";
import MultipleChoice from "./MultipleChoice";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
const InputBox = () => {
  const [type, setType] = React.useState("m");
  function ChangeBox() {
    if (type === "m") return <MultipleChoice />;
    if (type === "s") return <ShortAnswer />;
    if (type === "p") return <Paragraph />;
    if (type === "c") return <Checkbox />;
    if (type === "d") return <Dropdown />;
  }
  return (
    <div className="input-box main">
      <ChangeBox />
      <select
        onChange={(e) => {
          setType(e.target.value);
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
