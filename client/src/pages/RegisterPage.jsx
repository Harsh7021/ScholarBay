import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    course: '',
    yearSemester: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(form);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Registration failed';
      const hint = !err.response
        ? ' Check your connection. If using the deployed site, the server may be waking up—try again in a moment.'
        : '';
      setError(msg + hint);
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Create Account</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Course / Program</label>
          <input
            className="form-control"
            name="course"
            value={form.course}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Year / Semester</label>
          <input
            className="form-control"
            name="yearSemester"
            value={form.yearSemester}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Sign Up
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

