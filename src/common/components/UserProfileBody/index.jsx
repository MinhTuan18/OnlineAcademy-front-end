import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './style.css';
import { userInfo as getUserInfo, UpdateProfile } from '../../../service/user';
import { resendOTP } from '../../../service';
import Swal from 'sweetalert2';


export default function UserProfileBody(props) {

    const [userInfo, setUserInfo] = useState({ name: '', email: '' })
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        const fetch = async () => {
            const user = await getUserInfo(localStorage.getItem('userId'));
            setUserInfo(user);
        }

        fetch();
    }, [])

    const [enteredOtp, setEnteredOtp] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');

    // // const useDidUpdateEffect = (postData) => {
    //     useEffect(async () => {
    //         postData.otp = enteredOtp;

    //         const result1 = await UpdateProfile(userInfo._id, postData);
    //         if (result1) {
    //             return showSuccessModal()
    //         }
    //     }, [enteredOtp])
    // // }

    // // useDidUpdateEffect(postData);

    const showSuccessActivationModal = () => {
        Swal.fire({
            title: 'Success',
            text: 'Successfully updating your account',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(async () => {
            // update shown info
        })
    }

    const showInvalidModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'Failed to update profile. Please try again!',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
    }

    const showSuccessModal = () => {
        Swal.fire({
            title: 'Success',
            text: 'Successfully changed password ',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const showInvalidActivationModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'Entered OTP is not correct or has been expired. Please try entering again or receive another OTP!',
            icon: 'error',
            showDenyButton: true,
            confirmButtonText: 'Try Again',
            denyButtonText: 'Resend OTP'
        }).then(async (result) => {
            if (result.isDenied) {
                console.log(updatedEmail);
                const resendOTPResult = await resendOTP(updatedEmail);
                console.log(resendOTPResult);
                const hashData = resendOTPResult?.hash ? resendOTPResult?.hash : '';
                localStorage.setItem('otp-hash', hashData);
            }
            showInputOtpModal();
        })
    }

    const showMissingOtpFieldModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'OTP is required. Please fill in OTP field!',
            icon: 'error',
            confirmButtonText: 'Try Again',
            showCancelButton: true,
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                showInputOtpModal();
            }
        });
    }

    const showInputOtpModal = async () => {
        const { value: otp } = await Swal.fire({
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            title: 'Successfully updated',
            input: 'text',
            inputLabel: 'Input your OTP to validate your email',
            inputPlaceholder: 'Enter your OTP',
            confirmButtonText: 'Send'
        })
        if (otp) {
            return otp;
        }
        return showMissingOtpFieldModal();
    }

    const onUpdateFormSubmit = async (updateData) => {
        // console.log(updateData);
        setUpdatedEmail(updateData.email);
        setUpdatedPassword(updateData.password);
        const updateResult = await update(updateData.email, updateData.password, updateData.name);
        if (updateResult) {
            const otpHash = updateResult?.hash ? updateResult?.hash : '';
            localStorage.setItem('otp-hash', otpHash);
            showInputOtpModal();
        } else {
            return Swal.fire({
                title: 'Error',
                text: 'This email has already been taken. Please try again with another email!',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    }

    const onSubmitForm = async data => {
        const postData = {
            name: data.newName,
            email: data.newEmail,
            hash: '',
            otp: '',
            passwordConfirm: data.passwordConfirm
        }
        if (data.newName === userInfo.name && data.newEmail === userInfo.email) {
            return showInvalidModal()
        }

        if (data.newEmail === userInfo.email) {
            postData.email = ''
            const result = await UpdateProfile(userInfo._id, postData);
            if (result) {
                return showSuccessModal()
            }
        }

        const resendOTPResult = await resendOTP(data.newEmail);
        console.log(resendOTPResult);
        const hashData = resendOTPResult?.hash ? resendOTPResult?.hash : '';
        postData.hash = hashData;
        postData.otp = await showInputOtpModal();
        console.log(postData)

        const result1 = await UpdateProfile(userInfo._id, postData);
        console.log(result1)
        if (result1) {
            return showSuccessModal()
        } else {
            return showInvalidModal()
        }

    }


    return (
        <>
            <div style={{ marginBottom: "50px" }}>
                <div className="contact-one">
                    <div className="container">
                        <h2 className="contact-one__title text-center" >User Profile</h2>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "-120px" }}>
                    <div className="row">
                        <div className="col-lg-3" style={{ padding: '0' }}>
                            <div className="user-profile__form-top">
                                <h2 className="user-profile__form-title">
                                    User Profile
                                </h2>
                            </div>
                            <Link to="/change-password">
                                <div className="user-profile__form-second">
                                    <h2 className="user-profile__form-title" style={{ color: "#81868a" }}>
                                        Change Password
                                    </h2>
                                </div>
                            </Link>
                            <Link to="/my-courses">
                                <div className="user-profile__form-second">
                                    <h2 className="user-profile__form-title" style={{ color: "#81868a", borderTopWidth: "10px" }}>
                                        Courses Management
                                    </h2>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-9" style={{ padding: '0' }}>
                            <div className="become-teacher__form">
                                <form className="become-teacher__form-content contact-form-validated" noValidate="novalidate" style={{ borderColor: "#2da397" }}
                                    onSubmit={handleSubmit(onSubmitForm)}>
                                    <input type="text" placeholder="Name" {...register("newName", {
                                        required: true,
                                        min: 3,
                                        max: 24,
                                    })} />
                                    {errors.newName && <span>Name not valid</span>}
                                    <input type="email" placeholder="Email" {...register("newEmail", {
                                        required: true,
                                        min: 3,
                                        max: 50,
                                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })} />
                                    {errors.newEmail && <span>Email not valid</span>}
                                    <input type="password" placeholder="Enter password to save changes" {...register("passwordConfirm", { required: true, value: "" })} />
                                    <button type="submit" className="thm-btn become-teacher__form-btn" >Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
