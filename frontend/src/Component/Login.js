import React from 'react';
import './Login.css';
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  return (
    <form className="login-form">
      <h1>USER LOGIN</h1>

      {/* Username */}
      <div className="input-container">
        <div className="icon-box"><FaRegUser /></div>
        <input type="text" name="username" placeholder="Username" />
      </div>

      {/* Password */}
      <div className="input-container">
        <div className="icon-box"><TbLockPassword /></div>
        <input type="password" name="password" placeholder="Password" />
      </div>

      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
