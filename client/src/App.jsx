import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./Components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About About={About} />} />
      </Routes>
    </div>
  );
}

export default App;
