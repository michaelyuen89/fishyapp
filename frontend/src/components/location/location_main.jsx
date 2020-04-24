import React from 'react';
import "./location_main.css";
import MapContainer from '../map/map_container';

class LocationMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div id="loc-main-main">
                <div id="loc-main-map">
                    <MapContainer/>
                </div>
            </div>
        )
    }
}

export default LocationMain;