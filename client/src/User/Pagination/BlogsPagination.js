import React from "react";

const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
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
          // //{/* <a
          //   onClick={() => paginate(number)}
          //   className="page-link"
          //   style={{ color: "#1E8BFF" }}
          // >
          //   {number}
          // </a> */}
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
