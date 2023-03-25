import { useNavigate, useParams } from "react-router-dom"; 
export default function Profile(){
    let navigate = useNavigate();
    let {username} =  useParams();
    return (
    <div>
        <h1>{username} Profile</h1>
        <button onClick={ () => { navigate("/about") } }>About</button> 
    </div>
    )
}