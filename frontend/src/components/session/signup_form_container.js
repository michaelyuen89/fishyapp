import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        formType: "Sign Up",
        demoUser: {
            username: "MasterFisher2000",
            email: "MasterFisher@gmail.com",
            password: "password"
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);