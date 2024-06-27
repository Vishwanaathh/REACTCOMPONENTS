import {useState} from "react";
function Notif({message}){
    const [flag,setFlag]=useState(false);
    const toggle=()=>{
        setFlag(!flag);
    }
    const show=()=>{
        setFlag(true);
        setTimeout(()=>{
            setFlag(false);
        },2000);
    }
    const stylee={
        transition:" width 2s ease in ease out",
        backgroundColor:"green"
    }
    return(
        <div> <button onClick={show}>Show</button>
            {flag&&<div style={stylee}>This is a {message}</div>

            }
        </div>
    )

}
export default Notif;