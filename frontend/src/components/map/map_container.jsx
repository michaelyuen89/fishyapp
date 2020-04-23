import {connect} from 'react-redux';
import Map from './map';
import {fetchAllLocations} from '../../actions/location_actions';

const msp = state => {
    debugger;
    // locations: state.entities.locations,
    // currentUser: state.entities.users[state.session.id],
    // errors: state.errors.locations,
    return {
        // locations: Object.values(state.locations.all)
        locations:state.entities.locations
    }
}

const mdp = dispatch => {
    debugger;
    return {
        fetchAllLocations: () => dispatch(fetchAllLocations())
    }
};

export default connect(msp, mdp)(Map);