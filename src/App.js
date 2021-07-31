import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onHandleLogin = (loginStatus) => {
    if (loginStatus) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  return (
    <Router>
        <div className='page-wrapper'>
          <Switch>
            <Route exact path='/'>
              <Home isLoggedIn={isLoggedIn}/>
            </Route>
            <Route path='/courses' component={CourseList}/>
            <Route path='/login'>
              <Login handleLogin={onHandleLogin}/>
            </Route>
            <Route path='/register' component={Register}/>
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;
