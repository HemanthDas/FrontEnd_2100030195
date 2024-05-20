import EditableText from "./EditableText.jsx";
const Paragraph = () => {
  return (
    <div className="para flexit">
      <EditableText />
      <div>
        <textarea placeholder="Paragraph"></textarea>
      </div>
    </div>
  );
};

export default Paragraph;
