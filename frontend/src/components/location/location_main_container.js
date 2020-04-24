import { connect } from 'react-redux';
import LocationMain from './location_main';
import { fetchAllFishes } from '../../actions/fish_actions';
import { fetchLocation } from '../../actions/location_actions';

const msp = (state, ownParams) => {
    return {
        fishes: state.entities.fishes,

    }
}

const mdp = dispatch => {
    return {
        fetchAllFishes: () => dispatch(fetchAllFishes())
    }
}

export default connect(msp, mdp)(LocationMain);