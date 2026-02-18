import React, { useEffect, useState } from 'react';
import api from '../api/axiosClient.js';
import ResourceCard from '../components/common/ResourceCard.jsx';
import PDFViewerModal from '../components/common/PDFViewerModal.jsx';

const LibraryPage = () => {
  const [resources, setResources] = useState([]);
  const [filters, setFilters] = useState({
    subject: '',
    semester: '',
    university: '',
    examYear: '',
    type: '',
  });
  const [openResource, setOpenResource] = useState(null);

  const fetchResources = async () => {
    const { data } = await api.get('/resources', { params: filters });
    setResources(data);
  };

  useEffect(() => {
    fetchResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (e) => {
    setFilters((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleApplyFilters = () => {
    fetchResources();
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Library</h2>

      <div className="row g-2 mb-3">
        <div className="col">
          <input
            className="form-control"
            placeholder="Subject"
            name="subject"
            value={filters.subject}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Semester"
            name="semester"
            value={filters.semester}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="University"
            name="university"
            value={filters.university}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Exam Year"
            name="examYear"
            value={filters.examYear}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="notes">Notes</option>
            <option value="paper">Paper</option>
            <option value="book">Book</option>
            <option value="solved-paper">Solved Paper</option>
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="button" onClick={handleApplyFilters}>
            Apply
          </button>
        </div>
      </div>

      {resources.map((r) => (
        <ResourceCard key={r._id} resource={r} onOpen={setOpenResource} />
      ))}

      <PDFViewerModal resource={openResource} onClose={() => setOpenResource(null)} />
    </div>
  );
};

export default LibraryPage;

