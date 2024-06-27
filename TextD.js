import {useState} from "react";
function TextD(){
    const [value,setValue]=useState("");
    const [flag,setFlag]=useState(false);
    const toggle=()=>{
        setFlag(!flag);
    }
    return(
       <div><input type="text" placeholder="enter a text" onChange={(e)=>{setValue(e.target.value)}}></input>
        <button onClick={toggle}>Display</button>
        <div>
            {flag&&(
              <p> {value}</p>
            )

            }
        </div>
        </div>
    )
}
export default TextD;