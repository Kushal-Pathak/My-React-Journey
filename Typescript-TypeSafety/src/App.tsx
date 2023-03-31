import "./App.css";
import {Person, Country} from "./components/Person";
function App() {
  const name: string = "Ram";
  const email = "ram@email.com";
  const age: number = 23;
  const isMarried: boolean = true;
  const friends = ["Sam", "Hari", "Sita", "Gita"];
  return (
    <div className="App">
      <Person
        name={"Ram"}
        email={"ram@email.com"}
        age={23}
        isMarried={true}
        friends={["Sam", "Hari", "Sita", "Gita"]}
        country={Country.Nepal}
      />
    </div>
  );
}
export default App;
