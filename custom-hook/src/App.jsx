import "./App.css";
import Cat from "./Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toggler from "./Toggler";
import Counter from "./Counter";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Toggler />
        <hr />
        <Cat />
        <hr/>
        <Counter/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
