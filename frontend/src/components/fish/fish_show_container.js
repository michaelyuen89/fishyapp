import { connect } from "react-redux";
import { fetchAllFishes, fetchFish } from "../../actions/fish_actions";
import FishShow from "./fish_show";

const mapStateToProps = (state, ownProps) => {
  return {
    fishes: state.entities.fishes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    // fetchFish: (fishId) => dispatch(fetchFish(fishId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FishShow);
