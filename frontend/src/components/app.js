import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NewFileUpload from './newFileUpload';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={MainPage} />
            <Route path="/api/document/upload" component={NewFileUpload} />
        </Switch>
    </div>
);

export default App;