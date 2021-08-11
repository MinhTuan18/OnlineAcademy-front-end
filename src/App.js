import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './common/components/PrivateRoute';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';

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
          </Switch>
        </div>
    </Router>
  );
}

export default App;
