class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(fishingLocations) {
        const fishingLocationsObj = {};
        fishingLocations.forEach(fishingLocation => fishingLocationsObj[fishingLocation.id] = fishingLocation);
        
        Object.keys(this.markers)
        .forEach((fishingLocationId) => this.removeMarker(this.markers[fishingLocationId]))

        
    }

    createFishingMaker(fishingLocation) {
        const position = new google.maps.LatLng(fishingLocation.lat, fishingLocation.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            title: fishingLocation.name,
            fishingLocationId: fishingLocation.id
        });

        marker.setMap(this.map);
        this.markers[marker.fishingLocationId] = marker;
    }

    removeMarkers(marker) {
        this.markers[marker.fishingLocationId].setMap(null);
        delete this.markers[marker.fishingLocationid];
    }
}

export default MarkerManager;