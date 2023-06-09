import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./Components/About";
import Inicio from "./Components/Inicio";
import Home from './Components/Home'

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {/* {pathname !== "/" && <NavBar onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={ <Inicio Inicio={Inicio} /> } />
        <Route path="/home" element={ <Home Home={Home} /> } />
        <Route path="/about" element={ <About About={About} /> } />
      </Routes>
    </div>
  );
}

export default App;
