import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import css from './pagination-card.scss';

const PaginationCards = ({ totalLength, pageSize, handlePageChange, resetPage, classes }) => {
  const pagesCount = Math.ceil(totalLength / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (resetPage) setCurrentPage(0);
  }, [resetPage]);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
    handlePageChange(index);
  };

  return (
    <div className={classnames(css.container, classes)}>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink onClick={e => handleClick(e, currentPage - 1)} previous href="#" />
        </PaginationItem>
        {[...Array(pagesCount)].map((_, i) => (
          <PaginationItem active={i === currentPage}>
            <PaginationLink onClick={e => handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink onClick={e => handleClick(e, currentPage + 1)} next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationCards;
