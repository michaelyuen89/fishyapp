import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FishFormContainer from './fish/fish_form_container';
import FishIndexContainer from './fish/fish_index_container';
import UserPageContainer from './user/user_page_container';
import FishShowContainer from './fish/fish_show_container';

import PhotoExample from './photos/photo_example';
import MapContainer from './map/map_container';
import LocationPageContainer from './location/location_page_container';
import LocationMainContainer from './location/location_main_container';
import Footer from './footer/footer';


const App = () => (
    <div>
        <NavBarContainer />
        {/* <MapContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/new_fish" component={FishFormContainer} />
            <ProtectedRoute exact path="/fishes" component={FishIndexContainer} />
            <ProtectedRoute exact path="/fishes/:fish_name" component={FishShowContainer} />
            <ProtectedRoute exact path="/new_photo" component={PhotoExample} />
            <ProtectedRoute exact path="/album" component={UserPageContainer} />
            {/* <Route path="/" component={MainPage} /> */}
            <Route exact path="/" component={MainPage} />
            {/* <Route path="/" component={MainPage} /> */}
            <ProtectedRoute exact path="/location" component={LocationMainContainer} />
            <ProtectedRoute exact path ="/location/:content" component={LocationPageContainer} />
            <ProtectedRoute exact path="/map" component={MapContainer} />
        </Switch>
        <Footer />
    </div>
);
export default App;

