import React from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import '../LoginForm/login-form.css';

const RegisterForm = ({ onFormSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        onFormSubmit(data);
    }

    return (
        <section className="contact-one">
            <div className="container">
                <h2 className="contact-one__title text-center">Register</h2>
                <div className="become-teacher__form">
                    <div className="become-teacher__form-top">
                        <h2 className="become-teacher__form-title">
                            Registering for enrolling in courses 
                        </h2>
                    </div>
                    <form className="become-teacher__form-content contact-form-validated"
                            noValidate="novalidate"
                            onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Your Name" {...register("name", { required: true })} autoFocus/>
                        {errors.name && <span>Name is required</span>}

                        <input type="text" placeholder="Email Address" {...register("email", { required: true })}/>
                        {errors.email && <span>Email is required</span>}

                        <input type="password" placeholder="Password" {...register("password", { required: true })}/>
                        {errors.password && <span>Password is required</span>}

                        <input type="password" placeholder="Confirm Your Password" {...register("confirmedPassword", { required: true })}/>
                        {errors.confirmedPassword && <span>Confirmed password is required</span>}

                        <button type="submit" className="thm-btn become-teacher__form-btn">Register</button>
                    </form>
                </div>
                <div className="result text-center"></div>
            </div>
            
        </section>
        
    );
}

RegisterForm.propTypes = {
    onFormSubmit: PropTypes.func
}

export default RegisterForm;
