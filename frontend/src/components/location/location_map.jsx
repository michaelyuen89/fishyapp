// const googleMap = require("../../../../config/keys.js").REACT_APP_GOOGLE_KEY;


import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
// import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './location_map.css';
import mapStyles from '../mapStyles';
import { Link } from 'react-router-dom';
import axios from 'axios';
require('dotenv').config();

class LocationMap extends React.Component {
    constructor(props) {
        debugger;
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

        let myLatLng = { lat: this.props.location.lat, lng: this.props.location.lng }
        const options = {
            zoom: 15,
            center: myLatLng,
            styles: mapStyles,
        }
        let map = new window.google.maps.Map(document.getElementById('map'), options);

        var infoWindow = new window.google.maps.InfoWindow();

        let markers = [];

        // function createMarkers() {
        // let markers = [];
        // // debugger;
        Object.values(this.props.locations).forEach(location => {
            // debugger;
            // let marker = new window.google.maps.Marker({
            let marker = {
                coords: { lat: location.lat, lng: location.lng },
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content: `${location.name}`
            };
            markers.push(marker);
        });

        // debugger
        // $("button").click(function() {
        //     $("#toggleDetails").removeClass("active");
        // });

        for (let i = 0; i < markers.length; i++) {
            var data = markers[i];

            let myLatlng = new window.google.maps.LatLng(data.coords.lat, data.coords.lng)
            // Add marker


            var newMarker = new window.google.maps.Marker({
                id: i,
                position: myLatlng,
                map: map,
                icon: data.iconImage,
                animation: window.google.maps.Animation.DROP
            });
            // debugger;

            (function (marker, data) {
                let newPath = `location/${data.content}`
                // debugger;
                window.google.maps.event.addListener(marker, "mouseover", function (e) {
                    infoWindow.setContent(`<a href="#/${newPath}" style= 'width:200px; min-height:40px; text-align:center; font-weight: bold; vertical-align: middle;background-color: rgb(57, 136, 136); color:white'; cursor:pointer>`
                        + data.content + `</div>`);
                    infoWindow.open(map, marker);
                })
                map.addListener('center_changed', function () {
                    // 3 seconds after the center of the map has changed, pan back to the
                    // marker.
                    // map.setCenter(marker.getPosition())
                    //     window.setTimeout(function () {
                    (marker.getPosition());
                    //     }, 5000);
                });
                marker.addListener('click', function () {
                    map.setZoom(13);
                    map.setCenter(marker.getPosition())
                })
            })(newMarker, data);


        }
    }


    render() {
        // debugger;
        return (
            <>
                {/* <GoogleMap /> */}
                {/* <button onClick="showPanel()">{this.state} </button> */}

                {/* <div id="info-pane"> */}
                {/* <div id="info-photo"></div>
                    <div id="info-name">{}</div>
                    <div id="info-coord"></div> */}

                {/* </div> */}
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


export default LocationMap;