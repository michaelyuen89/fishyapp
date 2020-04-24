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
        debugger;
        let imageFile = <img src="fishingPic.jpg"/>
        if (this.props.match.params.content === "Weehawken Recreation Pier") {
            imageFile = <img src="weehawken-bright.jpg"/>
        } else if (this.props.match.params.content === "Pier 1") {
            imageFile = <img src="pier1.jpg" />
        } else if (this.props.match.params.content === "Van Cortlandt Lake") {
            imageFile = <img src="van-cortlandt-park-lake.jpg" />
        } else if (this.props.match.params.content === "WNYC Transmitter Park") {
            imageFile = <img src="WNYC-Transmitter-Park.jpg" />
        } else if (this.props.match.params.content === "Louis Valentino, Jr. Park and Pier") {
            imageFile = <img src="van-cortlandt-park-lake.jpg" />
        } else if (this.props.match.params.content === "Pier 4") {
            imageFile = <img src="Pier4.jpg" />
        } else if (this.props.match.params.content === "American Veterans Memorial Pier") {
            imageFile = <img src="AmericanVeterans.jpg" />
        } else if (this.props.match.params.content === "Ocean Breeze Fishing Pier") {
            imageFile = <img src="OceanBreeze.jpg" />
        } else if (this.props.match.params.content === "Pat Auletta Steeplechase Pier") {
            imageFile = <img src="PatAuletta.jpg" />
        } else if (this.props.match.params.content === "Sheepshead Bay Piers") {
            imageFile = <img src="SheepsHead.jpg" />
        } else if (this.props.match.params.content === "Canarsie Pier") {
            imageFile = <img src="CarnarsiePier.jpg" />
        } else if (this.props.match.params.content === "Baisley Pond") {
            imageFile = <img src="baisleyPond.jpg" />
        } else {
            imageFile = <img src="fishingPic.jpg"/>
        }
        // debugger;
        return (
            <>  
                <div id="loc-pg">
                    <div id="loc-pg-top">
                        <div id="loc-pg-map">
                            <MapContainer />
                        </div>
                    </div>
                    <div id="loc-pg-right">
                        <div id="loc-pg-img">
                            {imageFile}
                            {/* imageFile */}
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
                </div>
            </>
        )
    }
}

export default LocationPage;