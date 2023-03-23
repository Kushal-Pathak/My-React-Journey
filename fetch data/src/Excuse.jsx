import Axios from "axios";
import { useState } from "react";
export default function Excuse(){
    const [ excuse, setExcuse ] = useState({});
    const fetchExcuse = category => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
        .then(res=>setExcuse(res.data[0]))
    }
    return <div>
        <h1>Exercise 3</h1>
        <h2>Generate An Excuse</h2>
        <button onClick={ () => fetchExcuse("party") }>Party</button>
        <button onClick={ () => fetchExcuse("family") }>Family</button>
        <button onClick={ () => fetchExcuse("office") }>Office</button>
        <h3>{excuse.category} excuse</h3>
        <h3>{excuse.excuse}</h3>
    </div>
}