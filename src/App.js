import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Header, HomeHeader } from './common/components/Header';
import Home from './pages/Home';
import CourseList from './pages/CourseList';

function App() {
  return (
    <Router>
      
        <div className='page-wrapper'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/courses' component={CourseList}/>
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;
