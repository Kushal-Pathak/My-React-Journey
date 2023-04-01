//Just combining all three pages in a single file
export function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

export function Login() {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>Login</h1>
      <h1>{username}</h1>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
      <button>Logout</button>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
