// import React from 'react';
// import ReactDOM from 'react-dom';
// import MarkerManager from '../../../util/marker_manager';
// import { GOOGLE_MAP_KEY } from '../../../../../.env';

// class Map extends React.Component {
//     constructor(props){
//     super(props);

//     this.initMap = this.initMap.bind(this);
//     }

//     componentDidMount() {
//         this.initMap()
        
//     }

//     setCurrentPosition(map) {
//         let pos;
//         if (navigator.geoloction) {
//             navigator.geolocation.getCurrentPosition(
//                 position => {
//                     pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     map.setCenter(pos)
//                 }
//             )
//         }
//     }

//     initMap() {
//         const options = {
//             center : { lat:40.712776, lng:-74.005974},
//             zoom: 15,
//         }

//         let map = new google.maps.Map(this.refs.map, options);
//         this.setCurrentPosition(map);
//         this.dirRend.setMap(map)
//         this.map = map;

//         this.searchAutoComplete();
//         this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
//         this.MarkerManager.updateMarkers(this.props.fishingLocations);
//     }

//     componentDidUpdate() {
//         this.MarkerManager.updateMarkers(this.props.fishingLocations);
//     }

//     handleMarkerClick(fishingLocation) {
//         this.props.history.push(`fishingLocation/${fishingLocation.id}`)
//     }

//     // searchAutoComplete() {
//     //     let searchinput = document.getElementById('sea
//     // }

//     // renderMap() {
//     //     const url = "https://maps.googleapis.com/maps/api/js?key="
//     //     const key = GOOGLE
//     //     const urlEnd = "&libraries=places&callback=initMap"
//     //     loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&libraries=places&callback=initMap`)
//     //     window.initMap = this.initMap;
//     // }



//     render() {
//         return (
//             <div>
//                 <div id="map-container" className="google-map" ref="map">



//                 </div>
//             </div>
//         )
//     }
// }


// export default Map;