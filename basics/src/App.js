import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Job from "./components/Job";
import Planet from "./components/Planet";
import Text from "./components/Text";
function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button
        onClick={(event) => {
          setShowText(!showText);
        }}
      >
        Show
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
