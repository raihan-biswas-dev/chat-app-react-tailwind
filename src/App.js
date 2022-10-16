import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Home from "./pages/home/index";
import Message from "./pages/message/index";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="message" element={<Message />} />
    </Routes>
  );
}

export default App;
