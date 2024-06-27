import {useState} from "react";
function Dropdown(){
    const [isOpen,setIsOpen]=useState(false);
    const options=['OPTION 1','OPTION 2','OPTION 3'];
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <button onClick={toggle}>SHOW OPTIONS</button>
            <ul>
                { isOpen&&(
                    options.map((item,index)=>(
                        <li key="index">{item}</li>

                    ))
                )

                }
            </ul>
        </div>
    )

}
export default Dropdown;