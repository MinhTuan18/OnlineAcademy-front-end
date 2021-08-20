import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import Footer from '../../common/components/Footer';
// import { Header } from "../../common/components/Header";
// import LoginForm from '../../common/components/LoginForm';
// import { setStudentWatchList, setUserInfo } from '../../reducers';
// import { login } from '../../service';
import { Box, Typography, Container, Button, Card, Divider, TablePagination } from '@material-ui/core';
import { CoursesFilter } from '../../../common/components/CoursesFilter';
import CourseList from '../../../common/components/CourseList';

const Courses = () => {
    const createdCourses = useSelector(state => state.instructor.createdCourses);

    const [mode, setMode] = useState('table');
    const [query, setQuery] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const handleModeChange = (event, newMode) => {
        if (newMode) {
          setMode(newMode);
        }
      };
    
      const handleQueryChange = (newQuery) => {
        setQuery(newQuery);
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    return (
        <>
            {/* <InstructorPageHeader title='Courses'/>    */}
            <Box pb={3}
                pt={8}
                style={{
                    backgroundColor: 'background.default',
                }}
            >
                <Container maxWidth="lg">
                    <Box mb={3}
                        style={{
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    >
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Courses
                        </Typography>
                        <Box style={{ flexGrow: 1 }} />
                        <Button
                            href='/instructor/course/create/step-1'
                            size="large"
                            variant="contained"
                            style={{
                                backgroundColor: '#7c4bc0',
                                color: '#fff'
                            }}
                        >
                            New Course
                        </Button>
                    </Box>
                    <Card variant="outlined">
                        <CoursesFilter
                            mode={mode}
                            onModeChange={handleModeChange}
                            onQueryChange={handleQueryChange}
                            query={query}
                        />
                        <Divider />
                        <CourseList courses={createdCourses}/>
                        <Divider />
                        {/* <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </Card>
                </Container>
            </Box>
        </>
    );
}

export default Courses;
