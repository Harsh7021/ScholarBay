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

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

export default HomePage;

