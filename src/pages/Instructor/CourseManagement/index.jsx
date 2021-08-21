import React, {useEffect, useState} from 'react';
import { 
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory,
} from 'react-router-dom';
import { 
    AppBar,
    Toolbar,
    Box, 
    Button, 
    Grid,
    Container, 
    Radio,
    List, 
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import CourseLandingPage from './CourseLandingPage/index';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7c4bc0',
        position: 'fixed',
    },
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
    }, 
    backButton: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        '&:hover': {
            color: '#f16101',
        }
    },
    saveButton: {
        backgroundColor: 'trasparent',
        color: '#fff',
        border: '1px solid #fff',
        '&:hover': {
            backgroundColor: '#f16101',
            color: '#fff',
        }
    }, 
    sidebar: {
        display: 'block',
        boxSizing: 'border-box'
    },
    menuHeading: {
        display: 'inline-block',
        margin: theme.spacing(0, 0, 1, 2),
        fontWeight: 700,
        color: '#f16101'
    },
    activeItem: {
        borderLeft: '5px solid #f16101'
    }
}));

const DashboardLayoutRoot = styled('div')(
({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    paddingTop: theme.spacing(10),
})
);

const DashboardLayoutContentWrapper = styled('div')(
(theme) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingLeft: 72,
    paddingRight: 72,
    paddingTop: 40
})
);

const DashboardLayoutContent = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    overflow: 'auto'
});

const sidebarHeadings = [
    {menuHeading: 'Plan your course', menuItems: [
        {label: 'Intended learners', link: 'goals'},
        {label:'Course structure', link: 'course-structure'},
        {label: 'Setup & test video', link: 'setup'},
    ]},
    {menuHeading: 'Create your content', menuItems: [
        {label: 'Film & edit', link: 'film'},
        {label:'Curriculum', link: 'curriculum'},
        {label: 'Captions (optional)', link: 'captions'},
    ]},
    {menuHeading: 'Publish your course', menuItems: [
        {label: 'Course landing page', link: 'basics'},
        {label:'Pricing', link: 'pricing'},
        {label: 'Promotions', link: 'promotions'},
        {label: 'Course messages', link: '/communications/messages'},

    ]},
]

const CourseManagement = () => {
    const classes = useStyles();
    const [activeSidebarItem, setActiveSidebarItem] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedField, setSelectedField] = useState(0);
    const location = useLocation();
    const history = useHistory();
    const course = useSelector(state => state.course);
    console.log(course);
    const handleMenuItemClick = (event, itemLink, index, fieldIndex) => {
        event.preventDefault();
        setSelectedIndex(index);
        setSelectedField(fieldIndex);
        // console.log(location);
        history.push(location.pathname.replace(/[^/]*$/, itemLink));
    }
    return (
        
        <DashboardLayoutRoot>
            <AppBar elevation={0} className={classes.root}>
                <Toolbar
                    disableGutters
                    className={classes.toolbar}
                >
                    <Box
                        px={3}
                        py={1}
                        component={Link}
                        to="/instructor/courses"
                        className={classes.backButton}
                    >
                        Back to courses
                    </Box>
                    <Box style={{ flexGrow: 1 }} />
                    <Box px={3} py={1}>
                        <Button className={classes.saveButton}>Save</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <DashboardLayoutContent>
                <DashboardLayoutContentWrapper>
                    <Grid container xs>
                        
                        <Grid item container xs={3}>
                            <Box pt={5}>
                                <Container>
                                    {sidebarHeadings.map((linkGroup) => {
                                        const fieldIndex = sidebarHeadings.indexOf(linkGroup);
                                        return (
                                            <>
                                                <Typography variant="button" className={classes.menuHeading}>
                                                    {linkGroup.menuHeading}
                                                </Typography>
                                                <List component='nav'>
                                                    {linkGroup.menuItems.map(menuItem => {
                                                        const index = linkGroup.menuItems.indexOf(menuItem);
                                                        // const index=0;
                                                        // console.log(index);
                                                        return (
                                                            <ListItem key={menuItem.label} 
                                                                className={activeSidebarItem ? classes.activeItem : null}
                                                                button
                                                                onClick={event => handleMenuItemClick(event, menuItem.link ,index, fieldIndex)}
                                                                selected={selectedIndex === index && selectedField === fieldIndex}
                                                            >
                                                                <ListItemIcon>
                                                                    <Radio
                                                                        edge="start"
                                                                        tabIndex={-1}
                                                                        disableRipple
                                                                        disabled
                                                                    />
                                                                </ListItemIcon> 
                                                                <ListItemText primary={`${menuItem.label}`} />
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                            </>
                                        );
                                    })}
                                </Container>
                            </Box>
                        </Grid>
                        <Grid item container xs={12} md={9}>
                            <CourseLandingPage course={course}/>
                                
                            {/* <Route path='/instructor/course/:courseId/manage/goals'/>
                            <Route path='/instructor/course/:courseId/manage/curriculum'/>
                            <Route path='/instructor/course/:courseId/manage/basics' component={CourseLandingPage}/> */}  
                        </Grid>
                       
                    </Grid>
                </DashboardLayoutContentWrapper>
            </DashboardLayoutContent>
        </DashboardLayoutRoot>
    );
}

export default CourseManagement;
