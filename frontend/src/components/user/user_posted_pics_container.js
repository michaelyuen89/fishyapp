import { connect } from "react-redux";
import { fetchAllFishes } from "../../actions/fish_actions";
import { fetchFishPhotos, fetchUserPhotos, deletePhoto } from "../../actions/document_actions";
import { withRouter } from "react-router-dom";
import UserPostedPics from "./user_posted_pics";

const msp = (state) => ({
    fishes: state.entities.fishes,
    fishPhotos: Object.values(state.entities.photos.fish),
    userPhotos: Object.values(state.entities.photos.user),
    currentUser: state.session.user
});

const mdp = (dispatch) => ({
    fetchAllFishes: () => dispatch(fetchAllFishes()),
    fetchFishPhotos: (fishId) => dispatch(fetchFishPhotos(fishId)),
    fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
});

export default withRouter(connect(msp, mdp)(UserPostedPics));
