import React from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import '../LoginForm/login-form.css';

const ChangePasswordForm = ({ onFormSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        onFormSubmit(data);
    }
    return (
        <section className="contact-one">
            <div className="container">
                <h2 className="contact-one__title text-center">Change Password</h2>
                <div className="become-teacher__form">
                    <div className="become-teacher__form-top">
                        <h2 className="become-teacher__form-title">
                            Change Password
                        </h2>
                    </div>
                    <form className="become-teacher__form-content contact-form-validated"
                            noValidate="novalidate"
                            onSubmit={handleSubmit(onSubmit)}>
                        <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true })} autoFocus/>
                        {errors.oldPassword && <span>Old password is required</span>}
                        <input type="password" placeholder="New Password" {...register("newPassword", { required: true })}/>
                        {errors.newPassword && <span>New password is required</span>}
                        <input type="password" placeholder="Confirm New Password" {...register("confirmNewPassword", { required: true })}/>
                        {errors.confirmNewPassword && <span>You must confirm new password</span>}
                        <button type="submit" className="thm-btn become-teacher__form-btn">Change Password</button>
                    </form>
                    {/* <div className="result text-center"></div> */}
                </div>
                <div className="result text-center"></div>
            </div>
        </section>
    );
}

ChangePasswordForm.propTypes = {
    onFormSubmit: PropTypes.func
}

export default ChangePasswordForm;
