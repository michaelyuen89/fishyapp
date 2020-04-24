import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_page_actions";
import UserPage from "./user_page";


const msp = state => {
    // return {
    //    user: state.entities.user
    // }
};

const mdp = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
};

export default connect(null, mdp)(UserPage);
