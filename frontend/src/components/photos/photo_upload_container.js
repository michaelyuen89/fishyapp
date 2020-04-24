import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { uploadPhoto } from '../../actions/document_actions';
import { fetchAllFishes } from '../../actions/fish_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return{
    currentUser: state.session.user,
    newPhoto: state.entities.photos.new,
    fishes: Object.values(state.entities.fishes)
}};

const mdp = dispatch => ({
    uploadPhoto: (data) => dispatch(uploadPhoto(data)),
    fetchAllFishes: () => dispatch(fetchAllFishes())
    
});

export default withRouter(connect(msp, mdp)(PhotoUpload));