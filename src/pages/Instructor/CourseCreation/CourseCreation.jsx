import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  FormControl,
  Input, 
  InputAdornment,
  Chip,
  TextField,
  MenuItem, 
  Button, 
  Grid
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createCourse } from '../../../service';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'background.default',
        position: 'relative',
        padding: theme.spacing(8, 0)
    },
    margin: theme.spacing(10, 0),
    container: {
        padding: theme.spacing(10, 5),
        // py: theme.spacing(14),
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        margin: theme.spacing(3, 0)
    },
    subtitle: {
        margin: theme.spacing(0, 0, 10, 0),
    },
    input: {
        padding: '5px',
        minWidth: theme.spacing(70),
        border: '1px solid #1c1d1f',
    },
    chip: {
        backgroundColor: '#f7f9fa',
        fontWeight: 700,
        color: '#7c4bc0',
        padding: '2px',
        borderRadius: 0
    },
    error: {
        color: '#fc3b2d',
        margin: theme.spacing(1, 0, 0, 0)
    },
    select: {
        padding: '5px',
        minWidth: theme.spacing(70),
    },
    tab: {
        display: 'inline-block',
        margin: theme.spacing(0, 5, 0, 0)
    },
    link: {
        color: '#7c4bc0'
    }, 
    button: {
        backgroundColor: '#f16101',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2da397',
            color: '#fff',
        }
    }
}));

const FooterBox = styled('div')(
    ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      borderTop: '1px solid #d1d7dc',
      padding: '15px 0',
      bottom: 0,
      position: 'fixed'
    })
);

const CourseCreationBody = (props) => {
    const { step, categories, subCategories, onCourseCreationSubmit, course, onCourseCategorySubmit } = props;
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [category, setCategory] = useState('Choose a category');
    const [subCategory, setSubCategory] = useState('Choose a sub-category');
    const courseTitle = useSelector(state => state.course.title);
    const courseSubCategory = useSelector(state => state.course.subCategory);
    const history = useHistory();

    const onSubmit = (data) => {
        onCourseCreationSubmit(data);
        console.log(data);
        history.push(`/instructor/course/create/step-${step + 1}`);
    }
    const handleCategoryChange = event => {
        // console.log(event.target.value);
        setCategory(event.target.value);
    };

    const handleSubCategoryChange = event => {
        console.log(event.target.value);
        setSubCategory(event.target.value);
    };

    const handleContinueButtonClick = async (event) => {
        event.preventDefault();
        if (step === 1) {
            if (!errors.courseTitle) {
                history.push('/instructor/course/create/step-2');
            }
        } else if (step === 2) {
            if (!errors.category) {
                history.push('/instructor/course/create/step-3');
            }
        } else {
            console.log(courseTitle + courseSubCategory);
            const createCourseResult = await createCourse({title: courseTitle, subCategory: courseSubCategory});
            console.log(createCourseResult);
            if (createCourseResult?.courseId) {
                history.push(`/instructor/course/${createCourseResult?.courseId}/manage`);
            }
        }
    }
    useEffect(()=> {
        // console.log(category);
        onCourseCategorySubmit(category);
        // onCourseCreationSubmit({...course, category});
    }, [category])
    useEffect(()=> {
        // console.log(category);
        onCourseCreationSubmit({subCategory});
        // onCourseCreationSubmit({...course, category});
    }, [subCategory])
    return (
        <>
            <Box className={classes.root}>
                <Container
                    maxWidth="md"
                    className={classes.container}
                >
                    <Typography
                        align="center"
                        color="textPrimary"
                        className={classes.heading}
                        variant="h3"
                    >
                        {step === 1 ? 'How about a working title?' : step === 2 ? 'What category best fits the knowledge you about to share?' : 'What sub-category best fits the knowledge you about to share?'}
                    </Typography>
                    <Typography
                        align="center"
                        color="textSecondary"
                        variant="body2"
                        className={classes.subtitle}
                    >
                        {step === 1 ? 'It is ok if you cannot think of a good title now. You can change it later.' : 
                            step == 2 ? 'If you are not sure about the right category, you can change it later.' : 
                                'If you are not sure about the right sub-category, you can change it later.'}
                    </Typography>
                    <form className={classes.margin} onSubmit={handleSubmit(onSubmit)}>
                        {step === 1 ? (
                            <>
                                <Input
                                    className={classes.input}
                                    placeholder='e.g. Learn Javascript'
                                    {...register("courseTitle", { required: true })}
                                    // helperText={error ? 'Course Title Is Required' : ''}
                                    autoFocus
                                    disableUnderline
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Chip label='60' className={classes.chip}>
                                            </Chip>
                                        </InputAdornment>
                                    }
                                />
                                {errors.courseTitle && 
                                    <Typography
                                        align="left"
                                        variant="body2"
                                        className={classes.error}
                                    >
                                        Course Title Is Missing
                                    </Typography>
                                }
                            </>
                        ) : step === 2 ? (
                            <>
                                <TextField
                                    className={classes.select}
                                    {...register("category", { required: true })}
                                    select
                                    variant='outlined'
                                    value={category}
                                    onChange={handleCategoryChange}
                                >
                                    <MenuItem value='Choose a category'>Choose a category</MenuItem>
                                    {categories.map(category => (
                                        <MenuItem key={category._id} value={category._id}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {errors.category && 
                                    <Typography
                                        align="left"
                                        variant="body2"
                                        className={classes.error}
                                    >
                                        Category Is Missing
                                    </Typography>
                                }
                            </>) : (
                                <TextField
                                    className={classes.select}
                                    {...register("subCategory", { required: true })}
                                    select
                                    variant='outlined'
                                    value={subCategory}
                                    onChange={handleSubCategoryChange}
                                >
                                    <MenuItem value='Choose a sub-category'>Choose a sub-category</MenuItem>
                                    {subCategories.map(subCategory => (
                                        <MenuItem key={subCategory._id} value={subCategory._id}>
                                            {subCategory.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )
                        }
                    </form>
                </Container>
            </Box>
            <FooterBox component="footer">
                <Container maxWidth="lg">
                    <Grid container xs justifyContent='center' alignItems='center'>
                        <Grid item xs={6} container justifyContent='center'>
                            {step !== 1 ? <Link className={classes.link} to={`/instructor/course/create/step-${step - 1}`}>Previous</Link> : null}
                        </Grid>
                        <Grid item xs={6} container justifyContent='center'>
                            <Button className={classes.button} onClick={handleContinueButtonClick}>Continue</Button>
                        </Grid>
                    </Grid>
                </Container>
            </FooterBox>
        </>
        
    );
};

CourseCreationBody.defaultProps = {
    step: 1,
    categories: [],
    subCategories: [],
}

CourseCreationBody.propTypes = {
    step: PropTypes.number,
    categories: PropTypes.array,
    subCategories: PropTypes.array,
    onCourseCreationSubmit: PropTypes.func,
    onCourseCategorySubmit: PropTypes.func,
    course: PropTypes.object.isRequired
}

export default CourseCreationBody;
