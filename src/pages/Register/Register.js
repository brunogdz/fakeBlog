import styles from "./Register.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("The passwords need to be equals");
      return;
    }

    const res = await createUser(user)

    console.log(res)
  };

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Sign Up to Post</h1>
      <p>Sign Up and share yours stories here!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="User name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="displayEmail"
            required
            placeholder="User email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirm Password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Sign Up</button>}
        {loading && <button className="btn" disabled>Loading...</button>}
        
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
