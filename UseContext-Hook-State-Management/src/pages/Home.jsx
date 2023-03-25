import { useContext } from "react";
import App, { AppContext } from "../App";
export default function Home() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>THIS IS THE HOME PAGE: {username}</h1>
    </div>
  );
}
