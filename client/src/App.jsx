import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Inicio from "./Components/Inicio";
import Home from "./Components/Home";
import Details from "./Components/Detail";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio component={Inicio} />} />
        <Route path="/home" element={<Home component={Home} />} />
        <Route path="/activity" element={<Form component={Form} />} />
        <Route
          path="/countries/:id"
          element={<Details component={Details} />}
        />
      </Routes>
    </div>
  );
}

export default App;
