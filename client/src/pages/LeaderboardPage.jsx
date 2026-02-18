import React, { useEffect, useState } from 'react';
import api from '../api/axiosClient.js';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api
      .get('/stats/leaderboard')
      .then(({ data }) => setUsers(data))
      .catch((err) => setError(err.response?.data?.message || 'Failed to load leaderboard'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Leaderboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <p className="text-muted">Loading...</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Points</th>
            <th>Level</th>
            <th>Badges</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={u._id}>
              <td>{idx + 1}</td>
              <td>{u.fullName}</td>
              <td>{u.points}</td>
              <td>{u.level}</td>
              <td>{(u.badges || []).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;

