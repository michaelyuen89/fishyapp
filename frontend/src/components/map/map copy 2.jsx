import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import {withRouter} from 'react-router-dom';
// import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './map.css';
import mapStyles from '../mapStyles';
import {Link} from 'react-router-dom';
import axios from 'axios';
require('dotenv').config();



class Map extends React.Component {
    constructor(props){
        super(props);
        this.initMap = this.initMap.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllLocations()
        .then(() => this.renderMap());
    }

    renderMap() {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCkLiuUnbBfwpYMMEGN8lfswBVUlGDoFdw&libraries=places&callback=initMap`)
        window.initMap = this.initMap;
    }

    componentDidUpdate() {
        this.renderMap();
    }
    
    initMap() {
        let newMarkers = [];
        let bounds = new window.google.maps.LatLngBounds();
        
        
        const options = {
            zoom: 10,
            center: {lat: 40.736263, lng: -73.993806},
            styles: mapStyles,
        }
        let map = new window.google.maps.Map(document.getElementById('map'), options);
        

        window.google.maps.event.addListener(map, 'click', function (event) {
            addMarker({ coords: event.latLng });
        });


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

        let infoWindow = new window.google.maps.InfoWindow();

        let markers = [];

        // function createMarkers() {
            // let markers = [];
            // // debugger;
            Object.values(this.props.locations).forEach( location => {
                // debugger;
                // let marker = new window.google.maps.Marker({
                let marker = {
                    coords: { lat: location.lat, lng: location.lng},
                    iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content: `${location.name}`
                };
                markers.push(marker);
            });

            // debugger
    
        
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
                position: props.coords,
                map: map,
                // title: props.name,
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
            let newPath = "/locations/"+props.content;
            // let newpath = `/locations/${props.content}`
            if (props.content) {
                // debugger;
                var infoWindow = new window.google.maps.InfoWindow({
                    
                    // content: props.content
                    // content: '<a href="/locations/'+ props.content>'" 'props.content'</a>'
                    content: `<a href="#/${newPath}">${props.content}</a>`   
                    // content: <Link to={newPath}
                    //             className="location-name"
                    //             key={props.content}>
                    //             {props.content}
                    // </Link>
                });

                window.google.maps.event.addListener(marker, 'click', function(evt) {
                    infoWindow.close(map,marker);
                    infoWindow.open(map,marker);
                })
                

                // infoWindow.open(map);
                // let currentInfoWindow = infoWindow;
                
                // marker.addListener('click', function () {
                //     currentInfoWindow.close(map,marker);
                //     infoWindow.open(map, marker);
                //     showInfo(props)
                // });
            }
        }
                // function hideAllInfoWindows(map) {
                //     markers.forEach(function(marker) {
                //         marker.infoWindow.close(map,marker);
                //     })
                // }

        // function showInfo(props) {
        //     let infoPane = document.getElementById('info-pane');
        //     if (infoPane.classList.containers("open")) {
        //         infoPane.classList.remove("open");
        //     }
            
        //     while (infoPane.lastChild) {
        //         infoPane.removeChilde(infoPane.lastChild);
        //     }

        //     if (props.photo != null) {
        //         let photo = document.createElement('img');
        //         // photo.classList.add(props.photo)
        //         photo.src = props.photo;
        //         infoPane.appendChild(photo);
        //     }


        
        }
    // }


    render() {
        // debugger;
        return (
            <>
                {/* <GoogleMap /> */}
                {/* <div id="info-pane">
                    <div id="info-photo"></div>
                    <div id="info-name">{}</div>
                    <div id="info-coord"></div>

                </div> */}
                <div id="map"></div>


            </>
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