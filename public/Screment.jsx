import { useState } from "react"

export default function Screment() {
 const [num, setNum] = useState(0)
 const dataNum = ()=> {
   setNum(num+1)
 };

 return (
    <div className="numz">
    <h1>Increment:{num}</h1>
    <button onClick={dataNum}>Add Increment</button>
    </div>
 )
}

