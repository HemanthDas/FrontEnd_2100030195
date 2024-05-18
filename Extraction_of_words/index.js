const btn = document.getElementById("btn");
const output = document.getElementById("output");
const input = document.getElementById("input");
btn.addEventListener("click", () => {
  let val = input.value;
  if (val === "") {
    val = "Please enter a value";
  }
  val = highlightLongWords(val);
  output.innerHTML = val;
});
function highlightLongWords(val) {
  const text = val.split(" ");
  console.log(text);
  let highlightedText = "";
  for (let word of text) {
    if (word.length > 8) {
      highlightedText += ` <span style="background-color: yellow;">${word}</span> `;
    } else {
      highlightedText += ` ${word} `;
    }
  }
  console.log(highlightedText);
  return highlightedText;
}
