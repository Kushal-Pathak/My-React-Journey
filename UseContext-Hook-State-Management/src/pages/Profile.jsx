import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import App, { AppContext } from "../App";
export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>PROFILE: {username}</h1>
      <ChangeProfile />
    </div>
  );
}
