import React from 'react';
import '../LoginForm/login-form.css';

const RegisterForm = () => {
    return (
        <section className="contact-one">
            <div className="container">
                <h2 className="contact-one__title text-center">Register</h2>
                {/* <form action="#" className="contact-one__form contact-form-validated"
                        noValidate="novalidate">
                    <div className="row low-gutters">
                        <div className="col-lg-6">
                            <input type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-lg-12">
                            <textarea placeholder="Write Message" name="message"></textarea>
                            <div className="text-center">
                                <button type="submit" className="contact-one__btn thm-btn">Submit Comment</button>
                            </div>
                        </div>
                    </div>
                </form> */}
                <div className="become-teacher__form">
                    <div className="become-teacher__form-top">
                        <h2 className="become-teacher__form-title">
                            Apply for studying
                        </h2>
                    </div>
                    <form action="#"
                            className="become-teacher__form-content contact-form-validated"
                            noValidate="novalidate">
                        <input type="text" placeholder="Your Name" name="name" />
                        <input type="text" placeholder="Email Address" name="email" />
                        <input type="password" placeholder="Password" name="password" />
                        <input type="password" placeholder="Confirm Your Password" name="confirm-password" />
                        <button type="submit" className="thm-btn become-teacher__form-btn">Register
                        </button>
                    </form>
                    {/* <div className="result text-center"></div> */}
                </div>
                <div className="result text-center"></div>
            </div>
            
        </section>
        
    );
}

export default RegisterForm;