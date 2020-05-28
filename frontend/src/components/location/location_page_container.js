import {connect} from 'react-redux';
import LocationPage from './location_page';
import {fetchAllFishes} from '../../actions/fish_actions';
import {fetchAllLocations} from '../../actions/location_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownParams) => {
    // debugger;
    return {
    fishes: state.entities.fishes,
    locations: state.entities.locations,
    // location: state.entities.location[location]
    
    }
}

const mdp = dispatch => {
    return {
        // location: location => dispatch (fetchLocation(location)),
        fetchAllFishes: () => dispatch(fetchAllFishes()),
        fetchAllLocations: () => dispatch(fetchAllLocations())
    }
}

export default withRouter(connect(msp,mdp)(LocationPage));