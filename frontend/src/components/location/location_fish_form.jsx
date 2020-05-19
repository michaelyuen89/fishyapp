import React from 'react';
import {Link} from 'react-router-dom';
import './location_fish_form.css';

class LocationFishForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locationId: this.props.LocationId,
            fishId: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllFishes()
        this.props.fetchAllLocations();
    }

   

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props
            .editLocation({ id: this.props.locationId, fishIds: this.props.targetLocation.fishIds.concat(this.state.fishId) })
            .then(() =>
                this.props.editFish({ id: this.state.fishId, LocationIds: this.props.fishes[this.state.fishId].locationIds.concat(this.state.locationId) })
                    .then(() => {
                        this.setState({ fishId: "" });
                        window.location.reload(false);
                    })
            );
    }

    render() {
    
        debugger;
        if (Object.values(this.props.fishes).length === 0) return null;
        return (
            <div className="fish-location-form-container">
                {/* This is the fish location form FishId: {this.props.fishId} */}
                <span>Fishes: </span>
                {
                    this.props.targetLocation.fishIds.length === 0 ? ("None identified") : (
                        this.props.targetLocation.fishIds.map(id =>
                            this.props.fishes[id].name
                        ).join(", "))
                }
                <form action="" onSubmit={this.handleSubmit}>
                    <select
                        value={this.state.fishId ? this.state.fishId : "default-select-value"}
                        onChange={this.handleChange("fishId")}
                    >
                        <option
                            key={"default-select-location"}
                            value="default-select-value"
                            disabled
                        >
                            >>(Select a Fish).>
            </option>
                        {Object.values(this.props.fishes).map((fish) => (
                            <>
                                {this.props.targetLocation.fishIds.includes(fish._id) ? (
                                    ""
                                ) : (
                                        <option key={`${fish.name}`} value={fish._id}>
                                            {fish.name}
                                        </option>
                                    )}
                            </>
                        ))}
                    </select>
                    <input type="submit" value="Add Fish to Location" />
                </form>
            </div>
        );
    }
}

export default LocationFishForm;