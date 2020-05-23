import { connect } from 'react-redux';
import LocationFishForm from './location_fish_form';
import { editLocation, fetchAllLocations } from '../../actions/location_actions';
import { editFish, fetchAllFishes } from '../../actions/fish_actions';
// import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
    // debugger;
    return {
        fishes: state.entities.fishes,
        locations: state.entities.locations,
        locationId: ownProps.locationId,
        targetLocation: ownProps.location
    }
};

const mdp = dispatch => ({
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    editFish: (fish) => dispatch(editFish(fish)),
    editLocation: (location) => dispatch(editLocation(location)),
    fetchAllLocations: () => dispatch(fetchAllLocations())
});

export default connect(msp, mdp)(LocationFishForm);