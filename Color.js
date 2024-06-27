import {useState} from "react";
function Color(){
    const [color,setColor]=useState('red');
    const green=()=>{
        setColor('green');
    }
    const blue=()=>{
        setColor('blue');

    }
    const red=()=>{
        setColor('red');

    }
    const stylee={
        backgroundColor:color
    }
    return(
        <div>
            <button onClick={red}>RED</button>
            <button onClick={blue}>BLUE</button>
            <button onClick={green}>GREEN</button>
            <div style={stylee}>HELLOO</div>
        </div>
    )

}
export default Color;