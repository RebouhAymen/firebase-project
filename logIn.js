import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form onSubmit={handleLogin} className="form-container">
      <h2>Log into your account</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
		  required
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
		  required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
export default LogInForm;
