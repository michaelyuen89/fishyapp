import { connect } from "react-redux";
import FishPhotoSelect from "./fish_photo_select";
import { fetchAllFishes } from "../../actions/fish_actions";
import { fetchFishPhotos, fetchUserPhotos } from "../../actions/document_actions";
import { withRouter } from "react-router-dom";

const msp = (state) => ({
  fishes: Object.values(state.entities.fishes),
  fishPhotos: Object.values(state.entities.photos.fish),
  userPhotos: Object.values(state.entities.photos.user),
  currentUser: state.session.user
});

const mdp = (dispatch) => ({
  fetchAllFishes: () => dispatch(fetchAllFishes()),
  fetchFishPhotos: (fishId) => dispatch(fetchFishPhotos(fishId)),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default withRouter(connect(msp, mdp)(FishPhotoSelect));
