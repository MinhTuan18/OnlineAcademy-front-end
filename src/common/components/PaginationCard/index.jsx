import React, { useContext, useState } from 'react';
import css from './pagination-card.scss';
import CourseListContext from '../../../context/CourseListContext';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationCards = ({ totalPages, current }) => {
  const pagesCount = totalPages;
  const [currentPage, setCurrentPage] = useState(current);

  const { handlePageChange } = useContext(CourseListContext);

  const classes = useStyles();
  
  const handleChange = (e, index) => {
    e.preventDefault();
    if (index === currentPage) {
      return;
    }
    setCurrentPage(index);
    handlePageChange(index);
  };

  

  return (
    <div className={css.container}>
      <div className={classes.root}>
        <Pagination count={pagesCount} page={currentPage} onChange={handleChange} color="primary"/>
      </div>
    </div>
  );
};

export default PaginationCards;
