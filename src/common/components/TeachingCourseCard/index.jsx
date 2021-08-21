import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid, 
    Paper, 
    Typography,
    LinearProgress,
    Chip
} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#7c4bc0',
    },
}))(LinearProgress);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(8, 0),
        boxSizing: 'border-box'
    },
    paper: {
        margin: 'auto',
        maxWidth: '100%',
        padding: theme.spacing(0, 0, 0, 0),
        border: '1px solid rgba(28,29,31,.25)'
    },
    image: {
        width: 185,
        height: '100%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    link: {
        backgroundColor: 'transparent',
        color: '#7c4bc0',
        '&:hover': {
            color: '#2da397'
        }
    }
}));

const TeachingCourseCard = (props) => {
    const classes = useStyles();
    const { course } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Box className={classes.image}>
                            <img className={classes.img} alt="Teachinng_Course_Thumbnail" src={course?.thumbnailImageUrl === '' ? '/images/courses/course-1-1.jpg' : course?.thumbnailImageUrl}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs={6} container justifyContent='center' direction="column">
                            <Grid item>
                                <Grid item xs={12} >
                                    <Typography gutterBottom variant="h6">
                                        {course?.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} container>
                                    <Grid item xs={2}>
                                        <Chip
                                            label={course?.status}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <Chip
                                            label={course?.isBlocked ? 'Blocked' : 'Public'}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} container alignItems='center' justifyContent='center'>
                            <Link className={classes.link} to={`/instructor/courses/${course?._id}`}>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Edit/manage course
                                    </Typography>
                                </Grid>
                            </Link>
                            
                        </Grid>

                        {/* <Grid item xs={2} container alignItems='center'>
                            <Typography variant="subtitle1">Finish Your Course</Typography>
                        </Grid>  */}
                    </Grid>    
                </Grid>
                <BorderLinearProgress variant="determinate" value={50}/>
            </Paper>
        </div>
    );
}

TeachingCourseCard.propTypes = {
    course: PropTypes.object,
};

export default TeachingCourseCard;
