import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form onSubmit={handleSignup} className="form-container">
      <h2>Create an account</h2>
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
      <button type="submit">Sign Up</button>
      <hr />
      <button onClick={handleSignUpWithGoogle}>Sign Up with google</button>
    </form>
  );
}
export default SignUpForm;
