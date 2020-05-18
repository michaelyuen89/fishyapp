import React from 'react';
import MapContainer from '../map/map_container';
import "./location_page.css";
import { Link } from 'react-router-dom';
// import fishingPic from '../../../public/fishingPic'
// import NavbarContainer from '../navbar_container';

class LocationPage extends React.Component {
    constructor(props) {
        // debugger;
        super(props);

        this.fishes = [];
    }

    componentDidMount() {
        this.props.fetchAllFishes();
        this.props.fetchAllLocations();
       
    }

    
    render () {
        // debugger;
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


       

// [{"fishIds":["5ea0b75cc5d71400170b3a0d","5ea09bb6539d202c8f7dd966","5ea30ce77bb1710017450afa","5ea30ce77bb1710017450afa","5ea30ce77bb1710017450afa"],"_id":"5ea0cb945d99b65ec989ae80","name":"American Veterans Memorial Pier","description":"","lat":40.639458,"lng":-74.038012,"date":"2020-04-22T22:56:20.626Z","__v":8},{"fishIds":["5ea30ce77bb1710017450afa","5ea30ce77bb1710017450afa"],"_id":"5ea0cc795d99b65ec989ae86","name":"Baisley Pond","description":"","lat":40.67607,"lng":-73.785474,"date":"2020-04-22T23:00:09.178Z","__v":2}]

        let locationFishIds = []
        const locations = Object.values(this.props.locations)

        locations.forEach((location) => {
            if (location.name === this.props.location.pathname.slice(10)) {
                locationFishIds = location.fishIds;
            }
        })

        const fishes = Object.values(this.props.fishes)
        let locationFishes = [];

        fishes.forEach((fish) => {
            if(locationFishIds.includes(fish._id)) {
                locationFishes.push(fish.name)
            }
        })

        debugger;


        // const fishes = Object.values(this.props.fishes)

        // fishes.forEach((fish) => {
        //     if (fish.name.toLowerCase().replace(" ", "-") === this.props.match.params.fish_name) {
        //         locationFishes.push(fish);
        //     }
        // debugger;
        // const locs = Object.values(this.props.locations);

        // locs.forEach(loc => {
        //     debugger;
        //     if(loc.name === this.props.match.params.content) {
        //         this.fishes = loc.fishIds;
        //         // debugger;
        //     }
        // })

        // if (this.fishes === locs.fishIds)

        // Object.values(this.props.locations).forEach((location) => {
        //     debugger;
        //     if(location.name === this.props.match.params.content) {
        //         this.fishes.push(location.fishIds)
        //     }
        // })

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
                            <br/>
                            <div id="loc-pg-fish-index">
                                <span>Fishes in {this.props.match.params.content}</span>
                                {locationFishes.map(fish => (
                                    <div className="location-fishes">
                                        <Link
                                            className="fish-name-list"
                                            to={`/fishes/${fish.toLowerCase()
                                            .split(" ").join("-")}`}>
                                            <i class="fas fa-anchor"></i> {fish}
                                        </Link>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LocationPage;