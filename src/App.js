import './App.css';
import Labs from "./Lab";
 import Kanbas from "./Kanbas";
 import { HashRouter, Route,Routes, Navigate } from 'react-router-dom';
 import Project from "./Project";



function App() {
  return (
    <HashRouter>
    <div> 
        <Routes>   
        <Route path="/"         element={<Navigate to="/Labs"/>}/>  
        <Route path="/Labs/*"   element={<Labs/>}/>
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        <Route path="/project/*" element={<Project />} />
        </Routes> 
      </div>       
    </HashRouter>

  );
}

export default App;
