import "./App.css";
import Registration from "./pages/registration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Registration />} />
    </Routes>
  );
}

export default App;
