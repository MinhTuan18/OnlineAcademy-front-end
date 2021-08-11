import React, { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Footer from '../../common/components/Footer';
import { Header } from "../../common/components/Header";
import RegisterForm from '../../common/components/RegisterForm';
import { register, activateAccount, login, resendOTP } from '../../service';
import { setUserInfo } from '../../reducers';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [enteredOtp, setEnteredOtp] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('');
    const [registeredPassword, setRegisteredPassword] = useState('');

    const useDidUpdateEffect = (enteredOtp) => {
        const didMountRef = useRef(false);

        useEffect(async () => {
            if (didMountRef.current) {
                const hash = localStorage.getItem('otp-hash');
                // console.log(otpHash);
                // console.log(registeredEmail);
                const activateAccountResult = await activateAccount(registeredEmail, enteredOtp, hash);
                if (activateAccountResult?.verified) {
                    showSuccessActivationModal();
                } else {
                    showInvalidActivationModal();
                }
            } else {
                didMountRef.current = true;
            }
        }, [enteredOtp])
    }

    useDidUpdateEffect(enteredOtp);

    const showSuccessActivationModal = () => {
        Swal.fire({
            title: 'Success',
            text: 'Successfully activated your account',
            icon: 'success',
            confirmButtonText: 'Back To Home'
        }).then(async () => {
            const loginResult = await login(registeredEmail, registeredPassword);
            const userdata = loginResult?.data  ? loginResult?.data : {};
            // console.log(userdata);
            // let isLoggedIn;
            if (userdata) {
                dispatch(setUserInfo(userdata));
                // console.log(loggedIn);
                // handleLogin(true);
            }
            history.push('/');
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
                console.log(registeredEmail);
                const resendOTPResult = await resendOTP(registeredEmail);
                console.log(resendOTPResult);
                const hashData = resendOTPResult?.hash  ? resendOTPResult?.hash : '';
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
            title: 'Successfully registered',
            input: 'text',
            inputLabel: 'Input your OTP to activate your account',
            inputPlaceholder: 'Enter your OTP',
            confirmButtonText: 'Send'
        })
        if (otp) {
            console.log(otp);
            return setEnteredOtp(otp);
        }
        return showMissingOtpFieldModal();
    }

    const onRegisterFormSubmit = async (registerData) => {
        // console.log(registerData);
        setRegisteredEmail(registerData.email);
        setRegisteredPassword(registerData.password);
        const registerResult = await register(registerData.email, registerData.password, registerData.name);
        if (registerResult) {
            const otpHash = registerResult?.hash  ? registerResult?.hash : '';
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

    return (
        <>
            <Header/>
            <RegisterForm onFormSubmit={onRegisterFormSubmit}/>
            <Footer/>
        </>
    );
}

export default Register;
