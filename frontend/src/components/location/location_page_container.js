import {connect} from 'react-redux';
import LocationPage from './location_page';
import {fetchAllFishes} from '../../actions/fish_actions';
import {fetchLocation} from '../../actions/location_actions';

const msp = (state, ownParams) => {
    // debugger;
    return {
    fishes: state.entities.fishes,
    // location: state.entities.location[location]
    
    }
}

const mdp = dispatch => {
    return {
        // location: location => dispatch (fetchLocation(location)),
        fetchAllFishes: () => dispatch(fetchAllFishes())
    }
}

export default connect(msp,mdp)(LocationPage);