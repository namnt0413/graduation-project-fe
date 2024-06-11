import React from "react";
import "../styles/components/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <ul className="pagination">
      <li>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => (
        <li>
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;&gt;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
