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
        <h1>Generate An Excuse</h1>
        <button onClick={ () => fetchExcuse("party") }>Party</button>
        <button onClick={ () => fetchExcuse("family") }>Family</button>
        <button onClick={ () => fetchExcuse("office") }>Office</button>
        <h2>{excuse.category} excuse</h2>
        <h2>{excuse.excuse}</h2>
    </div>
}