import React from 'react';
import { backendRoot } from '../../api/axiosClient.js';

const PDFViewerModal = ({ resource, onClose }) => {
  if (!resource) return null;
  const url = `${backendRoot}/${(resource.filePath || '').replace(/\\/g, '/')}`;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center p-2 bg-dark text-light">
        <span>{resource.title}</span>
        <button className="btn btn-sm btn-outline-light" onClick={onClose}>
          Close
        </button>
      </div>
      <iframe title="PDF viewer" src={url} className="flex-grow-1 border-0" />
    </div>
  );
};

export default PDFViewerModal;

