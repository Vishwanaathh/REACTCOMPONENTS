import {useState} from "react";
function Loading(){
    const [isLoading,setisLoading]=useState(false);
    const toggle=()=>{
        setisLoading(true);
        setTimeout(()=>{
           setisLoading(false);
        },500)
    }
    const bar={
        width:isLoading?"100px":"0px",
        height:"20px",
        backgroundColor:"green",
        transition:"width 2s ease in ease out"
    }
    return(
        <div>
            <button onClick={toggle}>Loading</button>
            <div style={bar}></div>
        </div>
    )

}
export default Loading;