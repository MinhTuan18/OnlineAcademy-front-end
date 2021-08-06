import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    // // const loggedIn = useSelector(state => state.auth.loggedIn);
    // console.log(loggedIn);
    const accessToken = localStorage.getItem('access_token');
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            (loggedIn || accessToken) ?
                <Component {...props} /> : 
                <Redirect to="/login" />
        )} />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType,
}

export default PrivateRoute;
