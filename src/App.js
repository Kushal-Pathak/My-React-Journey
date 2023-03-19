import "./App.css";
import Job from "./components/Job";
import Planet from "./components/Planet";
function App() {
  const planets = [
    {
      name: "Mars",
      isGasPlanet: false,
    },
    {
      name: "Earth",
      isGasPlanet: false,
    },
    {
      name: "Jupiter",
      isGasPlanet: true,
    },
    {
      name: "Venus",
      isGasPlanet: false,
    },
    {
      name: "Neptune",
      isGasPlanet: true,
    },
    {
      name: "Uranus",
      isGasPlanet: true,
    },
  ];
  return (
    <div className="App">
      <Planet planets={planets}></Planet>
    </div>
  );
}

export default App;
