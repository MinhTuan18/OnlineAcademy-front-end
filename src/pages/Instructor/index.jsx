import React from 'react';
// import { Outlet } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { Navbar } from '../../common/components/InstructorNavbar';
import { Sidebar } from '../../common/components/Sidebar';
import { Footer } from '../../common/components/InstructorFooter';
import Courses from './Courses';
import { useEffect } from 'react';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutContentWrapper = styled('div')(
  () => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingLeft: 73,
    paddingTop: '120px'
  })
);

const DashboardLayoutContent = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  overflow: 'auto'
});

const Instructor = () => {
  const history = useHistory();
  // useEffect(() => history.push('/instructor/courses'))
  return(
    <DashboardLayoutRoot>
      <Navbar />
      <Sidebar />
      <Router>
          <DashboardLayoutContentWrapper>
            <DashboardLayoutContent>
                <Switch>
                    <Route path='/instructor/courses' component={Courses}/>
                    {/* <Route path='/instructor/courses/:courseId' component={Courses}/> */}
                </Switch>
                <Footer/>
            </DashboardLayoutContent>
          </DashboardLayoutContentWrapper>
      </Router>
      
    </DashboardLayoutRoot>
)};

export default Instructor;
