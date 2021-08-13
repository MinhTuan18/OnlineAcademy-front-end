import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://api.cloudinary.com/v1_1/online-academy/image/upload';
const preset = 'OnlineAcademy_Image';

const Upload = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = async(e) => {
        e.preventDefault();

        // e.preventDefault();
        // if (!selectedFile) return;
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
        // reader.onloadend = () => {
        //     uploadImage(reader.result);
        // };
        // reader.onerror = () => {
        //     console.error('AHHHHHHHH!!');
        //     setErrMsg('something went wrong!');
        // };
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(formData)

    try {
      const res = await axios.post('http://localhost:3000/upload', formData);
      
      
    } catch (err) {
      console.log(err);
    }
    };

    // const uploadImage = async (base64EncodedImage) => {
    //     try {
    //         await fetch('/api/upload', {
    //             method: 'POST',
    //             body: JSON.stringify({ data: base64EncodedImage }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         setFileInputState('');
    //         setPreviewSource('');
    //         setSuccessMsg('Image uploaded successfully');
    //     } catch (err) {
    //         console.error(err);
    //         setErrMsg('Something went wrong!');
    //     }
    // };
    return (
        <div>
            <h1 className="title">Upload an Image</h1>
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}


export default Upload;