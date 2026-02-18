import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../api/axiosClient.js';
import ResourceCard from '../components/common/ResourceCard.jsx';
import PDFViewerModal from '../components/common/PDFViewerModal.jsx';

const LibraryPage = () => {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    search: urlSearch,
    subject: '',
    semester: '',
    university: '',
    examYear: '',
    type: '',
  });
  const [openResource, setOpenResource] = useState(null);

  const fetchResources = async (overrides = {}) => {
    setError('');
    setLoading(true);
    try {
      const params = { ...filters, ...overrides };
      const { data } = await api.get('/resources', { params });
      setResources(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load resources');
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFilters((f) => ({ ...f, search: urlSearch }));
  }, [urlSearch]);

  useEffect(() => {
    fetchResources({ search: urlSearch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearch]);

  const handleFilterChange = (e) => {
    setFilters((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleApplyFilters = () => {
    fetchResources();
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Library</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <p className="text-muted">Loading...</p>}

      <div className="row g-2 mb-3">
        <div className="col">
          <input
            className="form-control"
            placeholder="Search by title"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
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

      {!loading && resources.length === 0 && !error && (
        <p className="text-muted">No resources found. Try different filters or upload some.</p>
      )}
      {resources.map((r) => (
        <ResourceCard key={r._id} resource={r} onOpen={setOpenResource} />
      ))}

      <PDFViewerModal resource={openResource} onClose={() => setOpenResource(null)} />
    </div>
  );
};

export default LibraryPage;

