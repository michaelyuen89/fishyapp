import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';
// import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker} from 'react-google-maps';
// import Geocode from 'react-geocode';
// Geocode.setApiKey("AIzaSyCkLiuUnbBfwpYMMEGN8lfswBVUlGDoFdw");
// Geocode.enableDebug
import './map.css';
import axios from 'axios';
// import GOOGLE_API_KEY from '../../../../config/keys/GOOGLE_API_KEY';
require('dotenv').config();

// const googleAPIKEy = process.env.GOOGLE_API_KEY


// const mapOptions = {
//     center: { lat: 40.736263, lng: -73.993806},
//     zoom: 15,
// }

// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });



class Map extends React.Component {
    constructor(props){
        super(props);
        // debugger;
        // this.state = {
        //     locations: []
        // }
        
        // this.initMap = this.initMap.bind(this);
        this.initMap = this.initMap.bind(this);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // this.searchAutoComplete = this.searchAutoComplete.bind(this)
    // this.searchUpdate = this.searchUpdate.bind(this);
    // this.updateCenter = this.updateCenter.bind(this);
    }

    componentDidMount() {
        // const map = document.getElementById('map');
        // this.map = new window.google.maps.Map(map, mapOptions)
        this.props.fetchAllLocations()
        .then(() => this.renderMap());
        // this.getLocations();
        // debugger;
    }

    // getLocations = () => {
    //     axios.get('/api/locations')
    //     .then((response) => {
    //         const data = response.data;
    //         this.setState({locations:data})
    //         debugger;
    //     })
    // }

    renderMap() {
        // const googleApiKey = process.env.GOOGLE_API_KEY;
        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCkLiuUnbBfwpYMMEGN8lfswBVUlGDoFdw&libraries=places&callback=initMap`)
        window.initMap = this.initMap;
    }

    componentDidUpdate() {
        this.renderMap();
    }
    
    initMap() {

        // let map = null;
        let newMarkers = [];
        let bounds = new window.google.maps.LatLngBounds();
        
        // createMarkers();
        
        const options = {
            zoom: 10,
            center: {lat: 40.736263, lng: -73.993806}
        }
        let map = new window.google.maps.Map(document.getElementById('map'), options);
        
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // if (this.props.singleLocation) {
        //     this.props.fetchLocation(this.props.location.id);
        // } else {
        //     this.registerListeners();
        //     this.MarkerManager.updateMarkers(this.props.benches);
        // }

        window.google.maps.event.addListener(map, 'click', function (event) {
            // Add marker
            addMarker({ coords: event.latLng });
        });

        // this.createMarkers();

        let pos;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }

        
        // Add marker
        // var marker = new google.maps.Marker({
        //   position:{lat:42.4668,lng:-70.9495},
        //   map:map,
        //   icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        // });
  
        // var infoWindow = new google.maps.InfoWindow({
        //   content:'<h1>Lynn MA</h1>'
        // });
  
        // marker.addListener('click', function(){
        //   infoWindow.open(map, marker);
        // });
    
        let infoWindow = new window.google.maps.InfoWindow();

        // // Array of markers
        // let markers = [
        //     {
        //         coords: { lat: 40.570149, lng: -73.983433 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Pat Auletta Steeplechase Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.639458, lng: -74.038012 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>American Veterans Memorial Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.628723, lng: -73.883914 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Canarsie Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.577969, lng: -74.076719 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Ocean Breeze Fishing Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.678415, lng: -74.018139 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Louis Valentino, Jr. Park and Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.890694, lng: -73.889304 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Van Cortlandt Lake</h1>'
        //     },
        //     {
        //         coords: { lat: 40.583969, lng: -73.945981 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Sheepshead Bay Piers</h1>'
        //     },
        //     {
        //         coords: { lat: 40.67607, lng: -73.785474 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Baisley Pond</h1>'
        //     },
        //     {
        //         coords: { lat: 40.779733, lng: -73.99046 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Pier 1</h1>'
        //     },
        //     {
        //         coords: { lat: 40.762684, lng: -74.019844 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>Weehawken Recreation Pier</h1>'
        //     },
        //     {
        //         coords: { lat: 40.72986, lng: -73.960702 },
        //         iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //         content: '<h1>WNYC Transmitter Park</h1>'
        //     },

        // ];

        let markers = [];

        // function createMarkers() {
            // let markers = [];
            // debugger;
            Object.values(this.props.locations).forEach( location => {
                // debugger;
                // let marker = new window.google.maps.Marker({
                let marker = {
                    coords: { lat: location.lat, lng: location.lng},
                    iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content: `<h1>${location.name}</h1>`
                };
                markers.push(marker)
            });
    
        
            for (let i = 0; i < markers.length; i++) {
                // Add marker
                addMarker(markers[i]);
            }            
        // }


        // Loop through markers

        // Add Marker Function
        function addMarker(props) {
            // debugger;
            var marker = new window.google.maps.Marker({
                // position: props.coords,
                position: {lat:props.coords.lat, lng:props.coords.lng},
                map: map,
                title: props.content,
                draggable: true,
                icon: props.iconImage
            });
            // debugger;

            // Check for customicon
            if (props.iconImage) {
                // Set icon image
                marker.setIcon(props.iconImage);
            }

            // Check content
            if (props.content) {
                var infoWindow = new window.google.maps.InfoWindow({
                    content: props.content
                });

                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            }
        }

        // createMarkers()

        function searchLocation(position) {
            let search = {
                location: position,
            }
        }

        // function updateCenter(e) {
        //     e.preventDefault();
        //     const searchInput = document.getElementById('search-input');
        //     this.geocoder.geocode({ 'address': this.state.location }, results => {
        //         //google library to provide geometric data.
        //         this.setState({ city: results[0].formatted_address });
        //         this.map.setCenter(results[0].geometry.location);
        //         //set map distance view;
        //         this.map.setZoom(13);
        //     })
        // }

        // function setCurrentPosition(map) {
        //     let pos;
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(
        //             position => {
        //                 pos = {
        //                     lat: position.coords.latitude,
        //                     lng: position.coords.longitude
        //                 };
        //                 map.setCenter(pos)
        //             }
        //         )
        //     }     
        }


    // searchAutoComplete() {
    //     let searchinput = document.getElementById('search-input');
    //     this.autoComplete = new google.maps.places.Autocomplete(searchInput);
    //     this.autoComplete.addListener('place_change', this.searchUpdate);
    // }

    // searchUpdate() {
    //     let palce = this.autoComplete.getPlace();
    //     if (place.geometry) {
    //         this.setState({location: place.formatted_address});
    //     } else {
    //         const searchInput = document.getElementById('search-input');
    //         searchInput.value = '';
    //         alert('Address Not Found')
    //     }
    // }

    // initMap() {
    //     const options = {
    //         center : { lat:40.712776, lng:-74.005974},
    //         zoom: 15,
    //     }

    //     let map = new google.maps.Map(this.refs.map, options);
    //     this.setCurrentPosition(map);
    //     this.dirRend.setMap(map)
    //     this.map = map;

    //     this.searchAutoComplete();
    //     this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    //     this.MarkerManager.updateMarkers(this.props.fishingLocations);
    // }

    // componentDidUpdate() {
    //     this.MarkerManager.updateMarkers(this.props.locations);
    // }





    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const latLngBounds = this.map.getBounds();
    //         const northCorner = {
    //             lat: latLngBounds.getNorthEast().lat(),
    //             lng: latLngBounds.getNorthEast().lng()
    //         };
    //         const southCorner = {
    //             lat: latLngBounds.getSouthWest().lat(),
    //             lng: latLngBounds.getSouthWest().lat(),
    //         };
    //         const bounds = {
    //             northCorner,
    //             southCorner
    //         };
    //         this.props.updateFilter('bounds', bounds);
    //     });
    // }



    render() {
        return (
            <>
                {/* <GoogleMap /> */}
                <div id="map"></div>
                {/* <form id="search-bar" onSubmit={this.updateCenter}>
                    <label id="search-label">Choose a map location
                                    <div>
                            <input
                                type="search"
                                className="search-form-input"
                                id="search-input"
                                value={this.state.location}
                                onChange={this.update('location')}
                                placeholder="Address"
                            />
                            <button
                                type="submit"
                                className="location-search">SEARCH</button>
                        </div>
                    </label>
                </form> */}

            </>
            // <div id="map-container">
                // <form id="search-bar" onSubmit={this.updateCenter}>
                //     <label id="search-label">Choose a map location
                //                     <div>
                //             <input
                //                 type="search"
                //                 className="search-form-input"
                //                 id="search-input"
                //                 value={this.state.location}
                //                 onChange={this.update('location')}
                //                 placeholder="Address"
                //             />
                //             <button
                //                 type="submit"
                //                 className="location-search">SEARCH</button>
                //         </div>
                //     </label>
                // </form>
            //     <div id="map-container" className="google-map" ref="map">

            //     </div>
            // </div>
        )
    }
}

function loadScript(url) {
    const index = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = url;
    script.asyn = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}


export default Map;