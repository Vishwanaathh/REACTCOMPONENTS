import {useState} from "react"
function Rating(){
    const [rate,setRate]=useState(0);
    const first=()=>{
        setRate(1);
    }
    const second=()=>{
        setRate(2);
    }



    return(
        <div>
            <div onClick={first}>1st star</div>
            <div onClick={second}>2nd star</div>
        </div>

    )

}
export default Rating