import React, { useEffect, useState } from 'react';
import api from '../api/axiosClient.js';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/stats/leaderboard').then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-3">Leaderboard</h2>
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

