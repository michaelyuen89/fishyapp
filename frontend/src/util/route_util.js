import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/home" />
        )
    )} />
);

const Protected = ({ component: Component, loggedIn, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const msp = state => ({
    loggedIn: state.session.isAuthenticared
});

export const AuthRoute = withRouter(connect(msp)(Auth));

export const ProtectedRoute = withRouter(connect(msp)(Protected));