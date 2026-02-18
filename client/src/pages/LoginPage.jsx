import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Invalid email or password';
      const hint = !err.response
        ? ' Check your connection. If using the deployed site, the server may be waking up—try again in a moment.'
        : '';
      setError(msg + hint);
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Login
        </button>
      </form>
      <p className="mt-3">
        New here? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginPage;

