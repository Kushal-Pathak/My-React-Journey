import Axios from "axios";
import { useState, useEffect } from "react";
export default function PredictAge() {
  const [age, setAge] = useState({});
  const [name, setName] = useState("Tesla");
  const handleChange = (event)=>{
    setName(event.target.value);
  }
  const predictAge =()=>{
    Axios.get("https://api.agify.io/?name=" + name)
    .then(res=>setAge(res.data))
  }
  useEffect(()=>{
    predictAge();
  }, []);

  return (
    <div>
      <h1>Exercise 2</h1>
      <h1>Predict your age!</h1>
      <input onChange={handleChange} type="text" placeholder="eg: Tesla"></input>
      <button onClick={predictAge}>Predict Age</button>
      <h3>Name: {age.name}</h3>
      <h3>Predicted Age: {age.age}</h3>
      <h3>Count: {age.count}</h3>
    </div>
  );
}
