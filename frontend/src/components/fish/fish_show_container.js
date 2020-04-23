import { connect } from "react-redux";
import { fetchAllFishes, fetchFish } from "../../actions/fish_actions";
import FishShow from "./fish_show";

const mapStateToProps = state => {
  return {
    fishes: state.entities.fishes,
    fish: state.entities.fish
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    fetchFish: (fishId) => dispatch(fetchFish(fishId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FishShow);
