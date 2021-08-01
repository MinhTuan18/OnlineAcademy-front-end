import React from 'react';
import './login-form.css';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const LoginForm = ({ onFormSubmit }) => {
    // const { onFormSubmit } = props;
    const { register, handleSubmit } = useForm();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const onSubmit = data => {
        // event.preventDefault();
        // console.log(data);
        onFormSubmit(data);
    }
    return (
        <section className="contact-one">
            <div className="container">
                <h2 className="contact-one__title text-center">Login</h2>
                <div className="become-teacher__form">
                    <div className="become-teacher__form-top">
                        <h2 className="become-teacher__form-title">
                            Login for registering courses
                        </h2>
                    </div>
                    <form className="become-teacher__form-content contact-form-validated"
                            noValidate="novalidate"
                            onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Email Address" {...register("email")}/>
                        <input type="password" placeholder="Password" {...register("password")}/>
                        <button type="submit" className="thm-btn become-teacher__form-btn">Log In</button>
                    </form>
                    {/* <div className="result text-center"></div> */}
                </div>
                <div className="result text-center"></div>
            </div>
            
        </section>
        
    );
}

LoginForm.propTypes = {
    onFormSubmit: PropTypes.func
}

export default LoginForm;