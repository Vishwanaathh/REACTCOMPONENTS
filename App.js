import Todo from './Todo';
import Dropdown from './Dropdown';
import './App.css';
import TextD from './TextD';
import Loading from './Loading';
import Tooltip from './Tooltip';
import Tabs from "./Tabs";
import Props from './Props';
import Fetch from "./Fetch";
import Notif from "./Notif";
import Progress from './pbar';
import Color from "./Color";
import Date from "./Date";

function App() {
  return (
<div><Todo/>
<Dropdown/>
<TextD/>
<Loading/>
<Tabs/>
<Tooltip text="this is a tool tip"><button>Hover me</button></Tooltip>
<Props text="This is a prop"/>
<Fetch/>
<Notif message="Notification bar"/>
<Progress/>
<Color/>
<Date/></div>
  );
}

export default App;
