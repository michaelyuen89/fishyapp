import { connect } from "react-redux";
import { fetchAllFishes, fetchFish } from "../../actions/fish_actions";
import { uploadPhoto, fetchFishPhotos } from "../../actions/document_actions";
import FishShow from "./fish_show";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    fishes: state.entities.fishes,
    fishPhotos: Object.values(state.entities.photos.fish),
    currentUser: state.session.user,
    newPhoto: state.entities.photos.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    fetchFishPhotos: fishId => dispatch(fetchFishPhotos(fishId)),
    uploadPhoto: data => dispatch(uploadPhoto(data))
    // fetchFish: (fishId) => dispatch(fetchFish(fishId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FishShow));
