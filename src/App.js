import "./App.css";
import Job from "./components/Job";
function App() {
  return (
    <div className="App">
      <Job salary={20000} position="Developer" company="Google"></Job>
    </div>
  );
}

export default App;
