import "./App.css";
import { MainRoutes } from "./Pages/MainRoutes";

import Stopwatch from "./Components/Stopwatch";
import Project from "./Pages/Project";



function App() {
  return (
    <div  >
      {/* <Stopwatch/> */}
      
      <MainRoutes />
      <Project/>
   
    </div>
  );
}

export default App;
