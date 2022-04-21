import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
  };

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Sign In</h1>
      <p>Sign In and share yours stories here!</p>
      <form onSubmit={handleSubmit}>
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
        {!loading && <button className="btn">Sign Up</button>}
        {loading && <button className="btn" disabled>Loading...</button>}
        
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
