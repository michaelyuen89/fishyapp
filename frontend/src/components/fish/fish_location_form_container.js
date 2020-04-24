import { connect } from 'react-redux';
import FishLocationForm from './fish_location_form';
import { fetchAllLocations } from '../../actions/location_actions';
import { editFish } from '../../actions/fish_actions';

const msp = (state, ownProps) => ({
    locations: state.entities.locations,
    fishId: ownProps.fishId,
    targetFish: ownProps.fish
});

const mdp = dispatch => ({
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    editFish: (fish) => dispatch(editFish(fish))
});

export default connect(msp, mdp)(FishLocationForm);