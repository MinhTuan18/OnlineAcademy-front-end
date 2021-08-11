import React from 'react';
import Swal from 'sweetalert2';
import Footer from '../../common/components/Footer';
import { Header } from '../../common/components/Header';
import ChangePasswordForm from '../../common/components/ChangePasswordForm';
import { changePassword } from '../../service';

const ChangePassword = () => {
    // const { handleLogin } = props

    // const loggedIn = useSelector(state => state.auth.loggedIn);
    // const dispatch = useDispatch();

    // const history = useHistory();

    // useEffect(() => {
    //     if(loggedIn)
    //     {
    //         // console.log(loggedIn);
    //         // if(localStorage.permission === 'customer'){
    //         history.push('/');
    //         // }
    //         // else if(localStorage.permission === 'admin'){
    //         //     history.push('/admin/homepage');
    //         // }
    //         // else if(localStorage.permission === 'employee'){
    //         //     history.push('/employee/homepage');
    //         // }
    //     }

    //     // return function cleanup(){
    //     //     isSubscribed = false;
    //     // }
    // }, [loggedIn]);

    const showInvalidOldPassswordModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'Current password is incorrect. Please try again later! ',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
    }

    const showSuccessChangePasswordModal = () => {
        Swal.fire({
            title: 'Success',
            text: 'Successfully changed password ',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const onChangePasswordFormSubmit = async (changePasswordData) => {
        console.log(changePasswordData);
        // console.log(password);
        const changePasswordResult = await changePassword(changePasswordData.oldPassword, changePasswordData.newPassword);
        if (!changePasswordResult) {
            return showInvalidOldPassswordModal();
        }
        console.log(changePasswordResult);
        showSuccessChangePasswordModal();
    }
    return (
        <>
            <Header/>
            <ChangePasswordForm onFormSubmit={onChangePasswordFormSubmit}/>
            <Footer/>
        </>
    );
}

export default ChangePassword;
