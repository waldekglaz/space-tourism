import Home from "./pages/Home";
import Destination from "./pages/Destination";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import JsonData from "./data.json";

function App() {
  console.log(JsonData);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Home />} />
        <Route path="/technology" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
