import React from "react";

const Pagination = ({ programsPerPage, totalPrograms, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPrograms / programsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav>
        {pageNumber.map((number) => (
          <button
            onClick={() => paginate(number)}
            size="sm"
            style={{ backgroundColor: "white", border: "none" }}
          >
            {number}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
