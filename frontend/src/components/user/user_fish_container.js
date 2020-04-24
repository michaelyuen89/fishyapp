import {connect} from 'react-redux';
import UserFish from './user_fish';
import {fetchAllFishes, deleteFish} from '../../actions/fish_actions';

const msp = state => ({
    fishes: state.entities.fishes,
    currentUser: state.session.user.id
});

const mdp = dispatch => ({
    fetchAllFishes: (userId) => dispatch(fetchAllFishes(userId)),
    deleteFish: (id) => dispatch(deleteFish(id))
    
});

export default connect(msp, mdp)(UserFish);