import "./app.css"
import Fetchdata from "./Fetchdata";
import PredictAge from "./PredictAge";
import Excuse from "./Excuse"
function App() {
  return (
    <div className="App">
     <Fetchdata></Fetchdata>
     <hr></hr>
     <PredictAge></PredictAge>
     <hr></hr>
     <Excuse></Excuse>
    </div>
  )
}

export default App
