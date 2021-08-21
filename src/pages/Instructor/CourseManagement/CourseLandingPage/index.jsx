import React, {useEffect, useState, useCallback, useRef} from 'react';
import { 
    Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { 
    Box, 
    Container,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    InputBase,
    Input,
    FormGroup,
    Grid,
    Select,
    MenuItem,
} from '@material-ui/core';
import { makeStyles, styled, withStyles } from '@material-ui/core/styles';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../../../../service';


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px 2px rgb(28 29 31 / 15%)'
    },
    container: {
        boxSizing: 'border-box',
    },
    subHeaderWrapper: {
        display: 'flex',
        position: 'relative',
        padding: theme.spacing(4, 6),
        borderBottom: '1px solid #d1d7dc'
    }, 
    subHeaderContent: {
        flex: 1,
        display: 'flex'
    }, 
    subHeader: {
        color: '#f16101',
        fontWeight: 700,
    },
    mainContentWrapper: {
        padding: theme.spacing(3)
    },
    formGroup: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    inputLabel: {
        color: '#2da397',
        fontWeight: '500'
    },
    wysiwygWrapper: {
        border: '1px solid #7c4bc0',
        borderRadius: 5,
    },
    wysiwygEditor: {
        border: '1px solid #7c4bc0',
        borderRadius: 5,
        height: theme.spacing(15)
    },
    wysiwygToolbar: {
        border: '1px solid #f16101',
        borderRadius: 5,
    },
    wysiwygBiggerEditor: {
        border: '1px solid #7c4bc0',
        borderRadius: 5,
        height: theme.spacing(30)
    },
    flexContainer: {
        display: 'flex'
    },
    margin: {
        margin: theme.spacing(4, 0)
    }
}));

const CourseLandingPage = (props) => {
    const { course } = props;
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [uploadImg, setUploadImg] = useState('/images/courses/course-1-1.jpg');
    const imgRef = useRef(null);
    const [crop, setCrop] = useState({ unit: '%', width: 370, aspect: 370 / 243 });
    const [completedCrop, setCompletedCrop] = useState(null);
    const previewCanvasRef = useRef(null);
    const formData = new FormData();

    const onFormSubmit = data => {
        console.log(data);
    }
    const onImageUpload = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUploadImg(reader.result));
            reader.readAsDataURL(event.target.files[0]);
            formData.append('file', event.target.files[0]);
            console.log(formData);
        }
    }
    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

    useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * scaleX,
            crop.height * scaleY
        );
    }, [completedCrop]);

    const generateDownload = async (canvas, crop) => {
        if (!crop || !canvas) {
            return;
        }
        const imageData  = canvas.toDataURL('image/png');
        // const ctx = canvas.getContext('2d');
        // const imageData = ctx.createImageData(canvas.width, canvas.height);
        // console.log(imageData);
        // const formData = new FormData();
        // formData.append('file', imageData);
        // console.log(formData)
        // const uploadResult = await uploadImage(formData);
        // console.log(uploadResult);
        const formData = new FormData();

        canvas.toBlob(
            (blob) => {
                // const previewUrl = window.URL.createObjectURL(blob);
            
                // const anchor = document.createElement('a');
                // anchor.download = 'cropPreview.png';
                // anchor.href = URL.createObjectURL(blob);
                // anchor.click();
                console.log(blob);
                // window.URL.revokeObjectURL(previewUrl);
                formData.append('file', blob);
                console.log(formData);
                
            },
            'image/png',
            1
        );
        console.log(formData)
        const uploadResult = await uploadImage(formData);
        console.log(uploadResult);
    }
    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Box className={classes.subHeaderWrapper}>
                    <Container className={classes.subHeaderContent}>
                        <Typography variant='h5' className={classes.subHeader}>
                            Course landing page
                        </Typography>
                    </Container>
                </Box>
                <Box className={classes.mainContentWrapper}>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <FormGroup>
                            <InputLabel margin='dense' className={classes.inputLabel}>
                                Course title
                            </InputLabel>
                            <TextField
                                className={classes.wysiwygWrapper}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                value={course.title}
                                {...register("title", { required: true })}
                            />
                        </FormGroup>
                        <FormGroup className={classes.formGroup}>
                            <InputLabel className={classes.inputLabel}>
                                Course short description
                            </InputLabel>
                            <Editor 
                                editorClassName={classes.wysiwygEditor}
                                toolbarClassName={classes.wysiwygToolbar}
                                
                            />
                        </FormGroup>
                        <FormGroup className={classes.formGroup}>
                            <InputLabel className={classes.inputLabel}>
                                Course detailed description
                            </InputLabel>
                            <Editor 
                                editorClassName={classes.wysiwygBiggerEditor}
                                toolbarClassName={classes.wysiwygToolbar}
                            />
                        </FormGroup>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} container justifyContent='center'>
                                <ReactCrop
                                    src={uploadImg}
                                    onImageLoaded={onLoad}
                                    crop={crop}
                                    onChange={(crop) => setCrop(crop)}
                                    onComplete={(c) => setCompletedCrop(c)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} container direction='column' alignItems='center'>
                                <Typography variant='body2'>
                                    Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
                                </Typography>
                                <div className={classes.margin}>
                                    <input type="file" accept="image/*" onChange={onImageUpload}/>
                                </div>
                                <canvas
                                    className={classes.margin}
                                    ref={previewCanvasRef}
                                    // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                                    style={{
                                        width: Math.round(completedCrop?.width ?? 0),
                                        height: Math.round(completedCrop?.height ?? 0),
                                    }}
                                />
                                <button
                                    type="button"
                                    disabled={!completedCrop?.width || !completedCrop?.height}
                                    onClick={() =>
                                        generateDownload(previewCanvasRef.current, completedCrop)
                                    }
                                >
                                    Upload cropped image
                                </button>
                            </Grid>
                        </Grid>
                
                    </form>
                </Box>
            </Container>
        </Box>
    );
}

CourseLandingPage.propTypes = {
    course: PropTypes.object,
}

export default CourseLandingPage;
