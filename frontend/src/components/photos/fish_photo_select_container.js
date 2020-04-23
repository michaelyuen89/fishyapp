import { connect } from "react-redux";
import FishPhotoSelect from "./fish_photo_select";
import { fetchAllFishes } from "../../actions/fish_actions";
import { fetchFishPhotos } from "../../actions/document_actions";
import { withRouter } from "react-router-dom";

const msp = (state) => ({
  fishes: Object.values(state.entities.fishes),
});

const mdp = (dispatch) => ({
  fetchAllFishes: () => dispatch(fetchAllFishes()),
  fetchFishPhotos: (fishId) => dispatch(fetchFishPhotos(fishId))
});

export default withRouter(connect(msp, mdp)(FishPhotoSelect));
