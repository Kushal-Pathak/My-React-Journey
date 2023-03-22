import { useState, useEffect } from "react";
export default function Text() {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Component Mounted");
  });
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <h1>{text}</h1>
    </div>
  );
}
