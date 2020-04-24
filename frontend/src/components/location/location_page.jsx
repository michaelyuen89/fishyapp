import React from 'react';
import MapContainer from '../map/map_container';
import "./location_page.css";
// import fishingPic from '../../../public/fishingPic'
// import NavbarContainer from '../navbar_container';

class LocationPage extends React.Component {
    constructor(props) {
        debugger;
        super(props);
    }

    componentDidMount() {
        debugger;
        this.props.fetchAllFishes();
    }
    render () {
        // debugger;
        return (
            <>  
                <div id="loc-pg">
                    <div id="loc-pg-top">
                        <div id="loc-pg-map">
                            <MapContainer />
                        </div>
                        <div id="loc-pg-img">
                            <img src="fishingPic.jpg"/>
                        </div>  
                    </div>
                    <br/>
                    <div id="loc-pg-content">
                        <div id="loc-pg-title">
                            {this.props.match.params.content}
                        </div>
                        <div id="loc-pg-fish-index">
                             <span>Fishes in {this.props.match.params.content}</span>
                        </div>
                        {/* {Object.values(this.props.fishes).map(fish => {
                            
                        }
                        )} */}
                    </div>
                </div>
            </>
        )
    }
}

export default LocationPage;