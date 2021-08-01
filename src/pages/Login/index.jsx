import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
        if(loggedIn)
        {
            // console.log(loggedIn);
            // if(localStorage.permission === 'customer'){
            history.push('/');
            // }
            // else if(localStorage.permission === 'admin'){
            //     history.push('/admin/homepage');
            // }
            // else if(localStorage.permission === 'employee'){
            //     history.push('/employee/homepage');
            // }
        }

        // return function cleanup(){
        //     isSubscribed = false;
        // }
    }, [loggedIn]);

    const onLoginFormSubmit = async (loginData) => {
        console.log(loginData);
        // console.log(password);
        const loginResult = await login(loginData.email, loginData.password);
        const userdata = loginResult?.data  ? loginResult?.data : {};
        console.log(userdata);
        // let isLoggedIn;
        if (userdata) {
            dispatch(setUserInfo(userdata));
            // console.log(loggedIn);
            // handleLogin(true);
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