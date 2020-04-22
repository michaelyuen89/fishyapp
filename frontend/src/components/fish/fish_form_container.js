import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FishForm from './fish_form';
import { createFish } from '../../actions/fish_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    createFish: (fish) => dispatch(createFish(fish)),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(msp, mdp)(FishForm));