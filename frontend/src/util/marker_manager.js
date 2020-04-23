// class MarkerManager {
//     constructor(map, handleClick) {
//         this.map = map;
//         this.handleClick = handleClick;
//         this.markers = {};
//     }

//     updateMarkers(locations) {
//         const locationsObj = {};
//         locations.forEach(location => locationsObj[location.id] = location);

//         locations
//             .filter(location => !this.markers[location.id])
//             .forEach(newLocation => this.createMarkerFromLocation(newLocation, this.handleClick))
        
//         Object.keys(this.markers)
//         .forEach((fishingLocationId) => this.removeMarker(this.markers[fishingLocationId]))    
//     }

//     createFishingMaker(location) {
//         const position = new google.maps.LatLng(location.lat, location.lng);
//         const marker = new google.maps.Marker({
//             position,
//             map: this.map,
//             title: location.name,
//             locationId: location.id
//         });

//         marker.setMap(this.map);
//         this.markers[marker.fishingLocationId] = marker;
//     }

//     removeMarkers(marker) {
//         this.markers[marker.locationId].setMap(null);
//         delete this.markers[marker.locationid];
//     }
// }

// export default MarkerManager;