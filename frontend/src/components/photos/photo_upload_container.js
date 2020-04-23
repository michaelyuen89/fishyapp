import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { uploadPhoto } from '../../actions/document_actions';
import { fetchAllFishes } from '../../actions/fish_actions';

const msp = state => ({
    currentUser: state.session.user,
    newPhoto: state.entities.photos.new,
    fishes: Object.values(state.entities.fishes)
});

const mdp = dispatch => ({
    uploadPhoto: (data) => dispatch(uploadPhoto(data)),
    fetchAllFishes: () => dispatch(fetchAllFishes())
    
});

export default connect(msp, mdp)(PhotoUpload);