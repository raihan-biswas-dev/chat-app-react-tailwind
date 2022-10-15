import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Home from "./pages/home/index";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
