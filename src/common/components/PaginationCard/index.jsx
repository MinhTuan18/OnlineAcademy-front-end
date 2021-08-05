import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import css from './pagination-card.scss';
import CourseListContext from '../../../context/CourseListContext';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationCards = ({ totalPages }) => {
  const pagesCount = totalPages;
  const [currentPage, setCurrentPage] = useState(1);

  const { handlePageChange } = useContext(CourseListContext);

  const classes = useStyles();
  
  const handleChange = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
    handlePageChange(index);
  };

  

  return (
    <div className={css.container}>
      <div className={classes.root}>
        <Typography>Page: {currentPage}</Typography>
        <Pagination count={pagesCount} page={currentPage} onChange={handleChange} color="primary"/>
      </div>
    </div>
  );
};

export default PaginationCards;
