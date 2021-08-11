import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './common/components/PrivateRoute';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';
import UserCourses from './pages/UserCourses';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const onHandleLogin = (loginStatus) => {
  //   if (loginStatus) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }
  return (
    <Router>
        <div className='page-wrapper'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/courses' component={CourseList}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <PrivateRoute path='/change-password' component={ChangePassword}/>
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
