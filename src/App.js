import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import {PrivateRoute, PrivateInstructorRoute} from './common/components/PrivateRoute';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import InstructorProfile from './pages/InstructorProfile';
import Instructor from './pages/Instructor';
import CourseCreation from './pages/Instructor/CourseCreation';
import { getAllCategories } from './service';
import { initCategoryList, setSubCategories } from './reducers/categoryReducer';
import { useDispatch } from 'react-redux';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';
import UserCourses from './pages/UserCourses';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchQueryAllCategories() {
        const queryResults = await getAllCategories();
        console.log(queryResults);
        dispatch(initCategoryList(queryResults));
    }
    fetchQueryAllCategories();
    async function fetchQueryAllSubCategories() {
      const queryResults = await getAllCategories();
      console.log(queryResults);
      dispatch(initCategoryList(queryResults));
    }
    fetchQueryAllSubCategories();
  })
  return (
    <Router>
        <div className='page-wrapper' >
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/courses' component={CourseList}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <PrivateRoute path='/change-password' component={ChangePassword}/>
            <Route path='/instructors' component={InstructorProfile}/>
            {/* <PrivateInstructorRoute exact path='/instructor' component={Instructor}/> */}
            <PrivateInstructorRoute exact path='/instructor/courses' component={Instructor} />
            <PrivateInstructorRoute path='/instructor/course/create' component={CourseCreation}/>
            <Route path='/course/:courseId' component={CourseDetail}/>
            <Redirect from="/course" to="/courses" />
            <PrivateRoute path='/user-profile' component={UserProfile}/>
            <PrivateRoute path='/my-courses' component={UserCourses}/>
            <PrivateRoute path='/wishlist' component={Wishlist}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
