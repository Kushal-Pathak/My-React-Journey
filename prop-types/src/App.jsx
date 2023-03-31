import "./App.css";
import Person from "./components/Person";

function App() {
  const name = "Ram";
  const email = "ram@email.com";
  const age = 23;
  const isMarried = true;
  const friends = ["Sam", "Hari", "Sita", "Gita"];
  return (
    <div className="App">
      <Person
        name={name}
        email={email}
        age={age}
        isMarried={isMarried}
        friends={friends}
      />
    </div>
  );
}

export default App;
