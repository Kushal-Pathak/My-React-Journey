import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>
      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              style={{ borderRadius: "50%" }}
              src={user?.photoURL || ""}
              width="50"
              height="50"
            />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
