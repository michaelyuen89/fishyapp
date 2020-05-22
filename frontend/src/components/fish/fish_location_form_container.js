import { connect } from 'react-redux';
import FishLocationForm from './fish_location_form';
import { fetchAllLocations, editLocation } from '../../actions/location_actions';
import { editFish } from '../../actions/fish_actions';

const msp = (state, ownProps) => ({
    locations: state.entities.locations,
    fishId: ownProps.fishId,
    targetFish: ownProps.fish
});

const mdp = dispatch => ({
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    editFish: (fish) => dispatch(editFish(fish)),
    editLocation: (location) => dispatch(editLocation(location))
});

export default connect(msp, mdp)(FishLocationForm);