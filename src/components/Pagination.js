import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <button
        className="btn btn-outline-primary me-2"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className="btn btn-secondary">{page}</span>
      <button
        className="btn btn-outline-primary ms-2"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
