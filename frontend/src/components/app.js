import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FishFormContainer from './fish/fish_form_container';
import FishIndexContainer from './fish/fish_index_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/new_fish" component={FishFormContainer}/>
            <ProtectedRoute exact path="/fishes" component={FishIndexContainer} />
            <Route path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;

