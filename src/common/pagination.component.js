import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalItems, pageCount, activePage, onChangePage } = this.props;
    const totalPages = Math.ceil(totalItems / pageCount) + 1;

    const pages = _.range(1, totalPages, 1); //3 ta parameter,start,end,inc/dec[1,2,3,4]
    if (totalItems <= pageCount) return null;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() =>
              activePage - 1 >= 1 ? onChangePage(activePage - 1) : null
            }
          >
            <a className="page-link" style={{ cursor: "pointer" }}>
              Previous
            </a>
          </li>
          {pages.map((page) => (
            <li
              onClick={() => onChangePage(page)}
              className={activePage === page ? "page-item active" : "page-item"}
            >
              <a className="page-link" style={{ cursor: "pointer" }}>
                {page}
              </a>
            </li>
          ))}
          <li
            className="page-item"
            onClick={() =>
              activePage + 1 <= totalPages - 1
                ? onChangePage(activePage + 1)
                : null
            }
          >
            <a className="page-link" style={{ cursor: "pointer" }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
