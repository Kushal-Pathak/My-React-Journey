import Axios from "axios";
import { useState, useEffect } from "react";
function Fetchdata() {
  const [fact, setFact] = useState("");
  const fetchfact = () => {
    // fetch("https://catfact.ninja/fact")
    // .then(res=> res.json())
    // .then(data=> setFact(data.fact));
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchfact();
  }, []);

  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <button onClick={fetchfact}>Generate Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default Fetchdata;
