import { useState } from "react";
import "./App.css";
import InputBox from "./components/inputBox";

function App() {
  const [fields, setFields] = useState(["Field 1"]);
  return (
    <div className="mid-body">
      <div className="floating-nav">
        Nav{" "}
        <button
          className="add"
          onClick={() => {
            setFields([...fields, `Field ${fields.length + 1}`]);
          }}
        >
          Add
        </button>
      </div>
      {fields.map((field, index) => {
        return <InputBox key={index + 1} />;
      })}
    </div>
  );
}

export default App;
