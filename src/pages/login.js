import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import Register from "./register";
import toast, {Toaster} from 'react-hot-toast';
import './login.css'

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success('Logged In!')
      setLoggedIn(true);
      
    } catch (error) {
      console.log(error.message);
      toast.error('Invalid Credentials')
    }
  };

  return (
    <div className="content">
    {!showSignUp ? (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="field">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="">
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </div>
      <p className="forgot-password text-right">
        Don't have an account? {" "}
        <button
              type="button"
              className="signup-link"
              onClick={() => setShowSignUp(true)}
            >
              Register
        </button>
      </p>
      <Toaster/>
    </form>
    
    ) : (
        <Register setLoggedIn={setLoggedIn} setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
}

export default Login;