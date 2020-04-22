import {connect} from 'react-redux';
import { fetchAllLocations } from '../../actions/location_actions';
import Search from './search';

const msp = ({entities}) => ({
    locations: Object.values(entities.locations),
})

const mdp = dispatch => ({
    fetchAllLocations: () => dispatch(fetchAllLocations()),
})

export default connect(msp, mdp)(Search);