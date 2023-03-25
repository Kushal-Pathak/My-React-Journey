import {Link} from "react-router-dom"
export default function Navbar(){
    return <div>
    <h3>NAVBAR</h3>
    <Link to="/">Home</Link>
    <Link to="/profile"> Profile</Link>
    <Link to="/contact"> Contact</Link>
  </div>
}