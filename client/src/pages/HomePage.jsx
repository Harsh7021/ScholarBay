import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="mb-3">Welcome to ScholarBay</h1>
        <p className="lead">
          A smart hub for students to discover and share notes, books, and
          previous-year question papers. Ask questions, track your progress, and
          climb the leaderboard.
        </p>
        <div className="mt-4">
          <Link to="/library" className="btn btn-primary me-2">
            Explore Library
          </Link>
          <Link to="/upload" className="btn btn-outline-primary">
            Upload Notes
          </Link>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Why ScholarBay?</h5>
            <ul>
              <li>Centralized study resources by subject & semester</li>
              <li>Built-in PDF viewer and quick downloads</li>
              <li>Ask questions and help other students</li>
              <li>Earn points, unlock badges, and top the leaderboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

