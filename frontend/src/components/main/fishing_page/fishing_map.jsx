import React from 'react';
import {initMap} from '../map/map';

class FishingMap extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            location: "",

        }
    }

    componentDidMount() {
        this.initMap();
    }

    searchAutoComplete() {
        let searchInput = document.getElementById('search-input');
        this.autoComplete = new google.maps.places.Autocomplete(searchInput);
        this.autoComplete.addListener('place_changed', this.searchUpdate);
    }

    searchupdate() {
        let place = this.autoComplete.getPlace();

        if(place.geometry) {
            this.setState({ location: place.formatted_address });
        } else {
            const searchInput = document.getElementById('search-input');
            searchInput.value = '';
            alert('Address Not Found')
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    };

    render () {
        return (
            <>
                <div className="fishing-map">
                    <div>
                        <form id="search-bar" onSubmit={this.updateCenter}>
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
                        </form>
                    </div>
                    <div id="map-main">
                        <div id="map-container" ref="map"></div>

                    </div>
                </div>
            </>
        )
    }
}

export default FishingMap;