import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "../my-style.css";
export const Navbar = () => {
  const signUserOut = async () => {
    await signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {!user ? (<Link to="/login">Login</Link>) :
      (<Link to="/createpost">Create Post</Link>)}
      <div className="navbar-right">
        {user && (
          <>
            <img style={{borderRadius: '50%'}} src={user?.photoURL || ""} width="50" height="50" />
            <p>{user?.displayName}</p>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
