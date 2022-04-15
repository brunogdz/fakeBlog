import styles from "./Register.module.css";

import {useState, useEffect} from 'react'

const Register = () => {
  return (
    <div>
      <h1>Sign Up to Post</h1>
      <p>Sign Up and share yours stories here!</p>
      <form>
        <label>
          <span>Name:</span>
          <input type="text" name="displayName" required placeholder="User name"/>
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="displayEmail" required placeholder="User email"/>
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder="Password"/>
        </label>
        <label>
          <span>Confirm Password:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirm Password"/>
        </label>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
