import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Map from './map/map';
import MapContainer from './map/map_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LocationPageContainer from './location/location_page_container';

const App = () => (
    <div>
        <NavBarContainer />
        {/* <MapContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <Route path="/" component={MainPage} /> */}
            <ProtectedRoute path ="/location/:content" component={LocationPageContainer} />
            {/* <ProtectedRoute exact path="/map" component={MapContainer} /> */}
        </Switch>
    </div>
);

export default App;