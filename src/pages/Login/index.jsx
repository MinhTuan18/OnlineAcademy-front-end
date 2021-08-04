import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../common/components/Footer';
import { Header } from "../../common/components/Header";
import LoginForm from '../../common/components/LoginForm';
import { setUserInfo } from '../../reducers';
import { login } from '../../service';

const Login = () => {
    // const { handleLogin } = props

    const loggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        // console.log(loggedIn);
        if (loggedIn)
        {
            history.push('/');
        }
    }, [loggedIn]);

    const showInvalidLoginModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'Email or password is incorrect. Please try again later! ',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
    }

    const onLoginFormSubmit = async (loginData) => {
        console.log(loginData);
        // console.log(password);
        const loginResult = await login(loginData.email, loginData.password);
        if (!loginResult) {
            return showInvalidLoginModal();
        }
        const userdata = loginResult?.data  ? loginResult?.data : {};
        console.log(userdata);
        if (userdata) {
            dispatch(setUserInfo(userdata));
        }
    }
    return (
        <>
            <Header/>
            <LoginForm onFormSubmit={onLoginFormSubmit}/>
            <Footer/>
        </>
    );
}

export default Login;
