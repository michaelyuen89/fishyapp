import { connect } from 'react-redux';
import LocationFishForm from './location_fish_form';
import { editLocation, fetchAllLocations } from '../../actions/location_actions';
import { fetchAllFishes } from '../../actions/fish_actions';

const msp = (state, ownParams) => {
    debugger;
    return {
        fishes: state.entities.fishes,
        // locations: state.entitites.locations,
        locationId: ownParams.locationId,
        targetLocation: ownParams.location
    }
};

const mdp = dispatch => ({
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    editLocation: (location) => dispatch(editLocation(location)),
    fetchAllLocations: () => dispatch(fetchAllLocations())
});

export default connect(msp, mdp)(LocationFishForm);