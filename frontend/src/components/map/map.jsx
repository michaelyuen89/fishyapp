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
        
        var infoWindow = new window.google.maps.InfoWindow();

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
            // $("button").click(function() {
            //     $("#toggleDetails").removeClass("active");
            // });
        
            for (let i = 0; i < markers.length; i++) {
                var data = markers[i];
                
                var myLatlng = new window.google.maps.LatLng(data.coords.lat, data.coords.lng)
                // Add marker
                var newMarker = new window.google.maps.Marker({
                    id: i,
                    position: myLatlng,
                    map:map,
                    icon:data.iconImage,
                    animation: window.google.maps.Animation.DROP
                });
                // debugger;
                
                (function (marker, data) {
                    let newPath = `location/${data.content}`
                    // debugger;
                    window.google.maps.event.addListener(marker, "mouseover", function (e) {
                        infoWindow.setContent(`<a href="#/${newPath}" style= 'width:200px; min-height:40px; text-align:center; font-weight: bold; vertical-align: middle;background-color: rgb(57, 136, 136); color:white'; cursor:pointer>`
                        +  data.content + `</div>`);
                        infoWindow.open(map, marker);
                    })
                    // newMarker.addListener('click', toggleBounce);
                }) (newMarker, data);
                
                // let newPath = "/locations/"+props.content;
        // if (props.content) {
            // var infoWindow = new window.google.maps.InfoWindow({

                // content: props.content

                // content: `<a href="#/${newPath}">${props.content}</a>` 


                // window.google.maps.event.addListener(newMarker, 'click', function (newMarker, i) {
                //     if ($('#info-container').css('display') == 'block') {
                //         $('#info-container').css('display', 'none');
                //     } else {
                //         $('#info-container').css('display','block');
                //     }
                // });
                
                // function toggleBounce() {
                //     if (newMarker.getAnimation() !== null) {
                //         newMarker.setAnimation(null);
                //     } else {
                //         newMarker.setAnimation(window.google.maps.Animation.BOUNCE);
                //     }
                // }

                // (function (marker, data) {
                //     window.google.maps.event.addListener(marker, "click", function(e) {
                //         return function () {
                //             var result = "<button>close</button><p>"+ data.content + "</p><p>" + e.latitude+"</p><p>" + e.longitude +"</p>";
                //             // $("#toggleDetails").html(result);
                //             // $("#toggleDetails").addClass("active");
                //         }
                //     })(markers[i], data)
                // });

            }      
            
            // $('button').live('click', function() {
            //     $("#toggleDetails").removeClass("active");
            //     return false;
            // })

        // Check content
        // let newPath = "/locations/"+props.content;
        // if (props.content) {
            // var infoWindow = new window.google.maps.InfoWindow({
                
                // content: props.content
                
                // content: `<a href="#/${newPath}">${props.content}</a>`   
                // content: <Link to={newPath}
                //             className="location-name"
                //             key={props.content}>
                //             {props.content}
                // </Link>
            // });     


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
        // }
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


export default Map;