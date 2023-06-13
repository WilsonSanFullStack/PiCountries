import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./Components/About";
import Inicio from "./Components/Inicio";
import Home from "./Components/Home";
import Details from "./Components/Detail"

function App() {
  //const { pathname } = useLocation();
  return (
    <div>
      {/* {pathname !== "/" && <NavBar onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={<Inicio component={Inicio} />} />
        <Route path="/home" element={<Home component={Home} />} />
        <Route path="/countries/:id" element={<Details component={Details}/>}/>
        <Route path="/about" element={<About component={About} />} />
      </Routes>
    </div>
  );
}

export default App;
