import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
