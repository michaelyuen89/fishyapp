import { connect } from 'react-redux';
import LocationMap from './location_map';
import { fetchAllLocations } from '../../actions/location_actions';
import {fetchAllFishes } from '../../actions/fish_actions';

const msp = (state, ownProps) => {
    // debugger;
    // locations: state.entities.locations,
    // currentUser: state.entities.users[state.session.id],
    // errors: state.errors.locations,
    return {
        // locations: Object.values(state.locations.all)
        // fishes: state.entitites.fishes,
        locations: state.entities.locations,
        targetLocation: ownProps.location,
        locationId: ownProps.locationId,
    }
}

const mdp = dispatch => {
    // debugger;
    return {
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        // fetchAllFIshes: () => dispatch(fetchAllFishes()),
    }
};

export default connect(msp, mdp)(LocationMap);