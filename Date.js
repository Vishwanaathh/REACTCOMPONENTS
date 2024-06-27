import {useState} from "react";

function Date(){
    const [date,setDate]=useState('');
    const dateRef=useState(null);
    return(<div>
        <input type="date" onChange={(e)=>setDate(e.target.value)}/>
        <p>{date}</p>
        </div>
    )

}
export default Date;