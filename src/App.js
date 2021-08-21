import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
<<<<<<< HEAD
  Redirect
=======
  Redirect,
>>>>>>> e7af8929b8f542d4bf2dda3e30e0c284413cfae8
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
<<<<<<< HEAD
import Wishlist from './pages/Wishlist/Wishlist';
import CourseManagement from './pages/Instructor/CourseManagement';
import Profile from './pages/Instructor/Profile';
=======
import Watchlist from './pages/Watchlist/Watchlist';
import Learning from './pages/Learning';
>>>>>>> e7af8929b8f542d4bf2dda3e30e0c284413cfae8

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
            <PrivateInstructorRoute exact path='/instructor/profile' component={Profile} />

            <Redirect from="/instructor/course/create" to="/instructor/course/create/step-1" />
            <PrivateInstructorRoute path='/instructor/course/create/step-1' component={CourseCreation}/>
            <PrivateInstructorRoute path='/instructor/course/:courseId/manage' component={CourseManagement}/>
            {/* <Redirect from="/instructor/course/:courseId/manage" to="/instructor/course/:courseId/manage/goals" /> */}

            <Route path='/instructors' component={InstructorProfile}/>
            {/* <PrivateInstructorRoute exact path='/instructor' component={Instructor}/> */}
            <PrivateInstructorRoute exact path='/instructor/courses' component={Instructor} />
            <PrivateInstructorRoute path='/instructor/course/create' component={CourseCreation}/>

            <Route path='/course/:courseId' component={CourseDetail}/>
            <Redirect from="/course" to="/courses" />
              
            <PrivateRoute path='/user-profile' component={UserProfile}/>
            <PrivateRoute path='/my-courses' component={UserCourses}/>
            <PrivateRoute path='/watchlist' component={Watchlist}/>
            <PrivateRoute path='/learn/:courseId' component={Learning}/>

          </Switch>
        </div>
    </Router>
  );
}

export default App;
