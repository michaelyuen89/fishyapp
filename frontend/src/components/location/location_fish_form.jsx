import React from 'react';
import {Link} from 'react-router-dom';
import './location_fish_form.css';

class LocationFishForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.LocationId,
            fishIds: "",
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
            .editLocation(this.state)
            .then(() => {
                this.setState({ fishIds: "" });
                window.fish.reload(false);
            });
    }

    render() {
        const fishes = Object.values(this.props.fishes)
          debugger
        if (Object.values(this.props.fishes).length === 0) return null;
        return (
            <>

                <div className="location-fish-form-container">
                    <span>Add Fish</span>
                {fishes.map((fish) => (
                    <div>
                        
                        {fish.name}
                    </div>
                ))}
                </div>
                <div id="location-fish-form-add-fish">
                    <Link to={'../new_fish'}>Fish not listed here? </Link> 
                </div>
            </>
        );
    }
}

export default LocationFishForm;