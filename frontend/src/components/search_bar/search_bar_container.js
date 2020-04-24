import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { fetchAllFishes } from '../../actions/fish_actions';

const msp = (state, ownProps) => {
    const fishNames = Object.values(state.entities.fishes).map(fish => fish.name);
    return {
        fishNames,
        history: ownProps.history,
        path: ownProps.location.pathname,
        query: queryString.parse(ownProps.location.search).name
    }
};

const mdp = dispatch => ({
    fetchAllFishes: () => dispatch(fetchAllFishes())
});

export default withRouter(connect(msp, mdp)(SearchBar));