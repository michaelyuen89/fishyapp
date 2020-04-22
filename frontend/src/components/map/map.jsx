import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';
import './map.css'

// const options = {
//     center : { lat:40.712776, lng:-74.005974},
//     zoom: 15,
// }



class Map extends React.Component {
    constructor(props){
        super(props);
        
        // this.initMap = this.initMap.bind(this);
        this.map = null;
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // this.searchAutoComplete = this.searchAutoComplete.bind(this)
    // this.searchUpdate = this.searchUpdate.bind(this);
    // this.updateCenter = this.updateCenter.bind(this);
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCkLiuUnbBfwpYMMEGN8lfswBVUlGDoFdw&libraries=places&callback=initMap")
        window.initMap = this.initMap;
    }
    
    initMap() {
        const options = {
            zoom: 16,
            center: {lat: 40.736263, lng: -73.993806}
        }
        this.map = new window.google.maps.Map(document.getElementById('map'), options);
    }

    // componentDidMount() {
    //     // this.initMap()
    //     this.map = new google.maps.Map(this.refs.map, options);
    //     this.registerListeners();
    //     this.setCurrentPosition(map);
    //     this.MarkerManager.updateMarkers(this.props.locations);
    //     this.searchAutoComplete();
    // }

    updateCenter(e) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        this.geocoder.geocode({ 'address': this.state.location }, results => {
            //google library to provide geometric data.
            this.setState({city: results[0].formatted_address});
            this.map.setCenter(results[0].geometry.location);
            //set map distance view;
            this.map.setZoom(13);
        })
    }

    // setCurrentPosition(map) {
    //     let pos;
    //     if (navigator.geoloction) {
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
    // }

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

    // handleMarkerClick(location) {
    //     this.props.history.push(`locations/${location.id}`)
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
                <div id="map"></div>
            </>
            // <div id="map-container">
            //     <form id="search-bar" onSubmit={this.updateCenter}>
            //         <label id="search-label">Choose a map location
            //                         <div>
            //                 <input
            //                     type="search"
            //                     className="search-form-input"
            //                     id="search-input"
            //                     value={this.state.location}
            //                     onChange={this.update('location')}
            //                     placeholder="Address"
            //                 />
            //                 <button
            //                     type="submit"
            //                     className="location-search">SEARCH</button>
            //             </div>
            //         </label>
            //     </form>
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