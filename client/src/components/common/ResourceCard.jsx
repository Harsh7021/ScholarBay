import React from 'react';

const ResourceCard = ({ resource, onOpen }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{resource.title}</h5>
      <p className="card-text mb-1">
        <strong>Subject:</strong> {resource.subject} | <strong>Type:</strong>{' '}
        {resource.type}
      </p>
      <p className="card-text">
        <small className="text-muted">
          {resource.semester} | {resource.university} | {resource.examYear}
        </small>
      </p>
      <button className="btn btn-sm btn-primary me-2" onClick={() => onOpen(resource)}>
        View
      </button>
    </div>
  </div>
);

export default ResourceCard;

