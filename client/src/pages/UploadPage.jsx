import React, { useState } from 'react';
import api from '../api/axiosClient.js';

const UploadPage = () => {
  const [form, setForm] = useState({
    title: '',
    subject: '',
    semester: '',
    university: '',
    examYear: '',
    type: 'notes',
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a PDF file.');
      return;
    }
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append('file', file);
    try {
      await api.post('/resources', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Uploaded successfully!');
    } catch {
      setMessage('Upload failed.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Upload Study Material</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Subject</label>
          <input
            className="form-control"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Semester</label>
          <input
            className="form-control"
            name="semester"
            value={form.semester}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">University</label>
          <input
            className="form-control"
            name="university"
            value={form.university}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Exam Year</label>
          <input
            className="form-control"
            name="examYear"
            value={form.examYear}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="notes">Notes</option>
            <option value="paper">Paper</option>
            <option value="book">Book</option>
            <option value="solved-paper">Solved Paper</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">PDF File</label>
          <input
            className="form-control"
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;

