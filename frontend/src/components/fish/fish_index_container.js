import { connect } from "react-redux";
import { fetchAllFishes } from "../../actions/fish_actions";
import FishIndex from "./fish_index";


const mapStateToProps = state => {
    return{
        fishes: state.entities.fishes.allFishes
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchAllFishes: () => dispatch(fetchAllFishes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FishIndex);
