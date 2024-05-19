import React from "react";

const EditableText = () => {
  const [text, setText] = React.useState("Double click to edit");
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <div className="edit-txt">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{text}</p>
      )}
    </div>
  );
};

export default EditableText;
