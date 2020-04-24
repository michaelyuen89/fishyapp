import React from 'react';
import PhotoUploadContainer from './photo_upload_container';
import FishPhotoSelectContainer from './fish_photo_select_container';
import './photo.css';

export default () => (
    <div>
        <PhotoUploadContainer />
        <FishPhotoSelectContainer />
    </div>
);