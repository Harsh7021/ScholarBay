import React, { useEffect, useState } from 'react';
import api from '../api/axiosClient.js';
import { useAuth } from '../context/AuthContext.jsx';

const ProfilePage = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    course: '',
    yearSemester: '',
    college: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || '',
        phone: user.phone || '',
        course: user.course || '',
        yearSemester: user.yearSemester || '',
        college: user.college || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/auth/profile', form);
      setMessage('Profile updated');
    } catch {
      setMessage('Update failed');
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-3">Profile</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Phone (optional)</label>
          <input
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
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
        <div className="mb-2">
          <label className="form-label">College / University (optional)</label>
          <input
            className="form-control"
            name="college"
            value={form.college}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;

