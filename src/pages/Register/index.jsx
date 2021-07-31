import React from 'react';
import Footer from '../../common/components/Footer';
import { Header } from "../../common/components/Header";
import RegisterForm from '../../common/components/RegisterForm';
const Register = () => {
    return (
        <>
            <Header/>
            <RegisterForm/>
            <Footer/>
        </>
    );
}

export default Register;