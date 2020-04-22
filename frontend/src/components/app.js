import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
const path = require('path');

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}