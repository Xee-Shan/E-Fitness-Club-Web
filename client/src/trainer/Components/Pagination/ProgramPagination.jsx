import React from "react";

const Pagination = ({ programPerPage, totalPrograms, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPrograms / programPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li
              key={number}
              className="page-item"
              style={{
                backgroundColor: "white",
                border: " 1px solid #DEE2E6",
              }}
            >
              <a
                onClick={() => paginate(number)}
                className="page-link"
                style={{ color: "#1E8BFF" }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
