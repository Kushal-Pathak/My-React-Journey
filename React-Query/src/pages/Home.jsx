import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export default function Home() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  if (isError) {
    return <h1>Sorry there was an error!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>HOME</h1>
      <p>{catData.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
}
