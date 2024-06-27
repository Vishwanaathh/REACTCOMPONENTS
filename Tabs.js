import {useState} from "react";
function Tabs(){
    const [activeTab,setactiveTab]=useState('tab-1');
    const handleTab=(tab)=>{
        setactiveTab(tab);
    }

    return(
        <div>
            <div onClick={()=>handleTab('tab-1')}>Tab-1</div>
            <div onClick={()=>handleTab('tab-2')}>Tab-2</div>
            <div onClick={()=>handleTab('tab-3')}>Tab-3</div>
            {activeTab === "tab-1" && <div>Content for Tab 1</div>}
      {activeTab === "tab-2" && <div>Content for Tab 2</div>}
      {activeTab === "tab-3" && <div>Content for Tab 3</div>}

        </div>
    )
}
export default Tabs;