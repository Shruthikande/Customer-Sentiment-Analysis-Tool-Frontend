import React, { useState } from 'react';
import './Login.css';
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth() || {};
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login({ username, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h1>USER LOGIN</h1>

      {/* Username */}
      <div className="input-container">
        <div className="icon-box"><FaRegUser /></div>
        <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      {/* Password */}
      <div className="input-container">
        <div className="icon-box"><TbLockPassword /></div>
        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'LOGIN'}</button>
    </form>
  );
};

export default Login;
