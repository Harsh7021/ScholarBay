import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const Navbar = ({ onSearchChange }) => {
  const { user, logout } = useAuth();
  const { dark, toggleTheme } = useTheme();
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname === '/library') {
      navigate(`/library?search=${encodeURIComponent(search)}`);
      if (onSearchChange) onSearchChange(search);
    } else {
      navigate(`/library?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand fw-bold" to="/">
        ScholarBay
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <form className="d-flex ms-3 flex-grow-1" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search notes, books, papers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <button
          className="btn btn-sm btn-outline-light ms-2"
          type="button"
          onClick={toggleTheme}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <Link className="nav-link" to="/library">
              Library
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upload">
              Upload
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ask">
              Ask
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leaderboard">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">
              Plans
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Hi, {user.fullName || 'Student'}
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-light ms-2"
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

