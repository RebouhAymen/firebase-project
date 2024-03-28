import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./pages/signUp";
import LogInForm from "./pages/logIn";
import Home from "./pages/home";
import Notes from "./pages/notes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
      <Route path="/login" element={<LogInForm />}></Route>
      <Route path="/notes" element={<Notes />}></Route>
    </Routes>
  );
}

export default App;
