import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const pageNumberStyle = {
    padding: "8px 12px",
    borderRadius: "20px",
    backgroundColor: "#f0f0f0",
    color: currentPage === pageNumbers ? "black" : "inherit",
    cursor: "pointer",
    margin: "4px", // Add some gap between page numbers
  };

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => {
        // Use the let keyword to declare pageNumber inside the map function
        return (
          <b
            key={pageNumber}
            style={pageNumberStyle}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </b>
        );
      })}
    </div>
  );
};

export default Pagination;
