import {useState} from "react";
function Props({text}){
    const [flag,setFlag]=useState(false);
    const toggle=()=>{
        setFlag(!flag);
    }
    return (
        <div>
            <button onClick={toggle}>SHOW PROPS</button>
            {flag&&<div>{text}</div>}
        </div>
    )

}
export default Props;