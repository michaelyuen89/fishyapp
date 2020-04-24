import React from 'react';
import './fish_location_form.css';

class FishLocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.fishId,
      locationIds: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLocations();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props
      .editFish(this.state)
      .then(() => {
          this.setState({ locationIds: "" });
            window.location.reload(false);
      });
  }

  render() {
    //   debugger
    if (Object.values(this.props.locations).length === 0) return null;
    return (
      <div className="fish-location-form-container">
        {/* This is the fish location form FishId: {this.props.fishId} */}
        <span>Fishing Spots: </span>
        {
            this.props.targetFish.locationIds.length === 0 ? ("None identified") : (
            this.props.targetFish.locationIds.map(id => 
                this.props.locations[id].name
            ).join(", "))
        }
        <form action="" onSubmit={this.handleSubmit}>
          <select
            value={this.state.locationIds ? this.state.locationIds : "default-select-value"}
            onChange={this.handleChange("locationIds")}
          >
            <option
              key={"default-select-location"}
              value="default-select-value"
              disabled
            >
              >>(Select a Location).>
            </option>
            {Object.values(this.props.locations).map((location) => (
              <>
                {this.props.targetFish.locationIds.includes(location._id) ? (
                  ""
                ) : (
                  <option key={`${location.name}`} value={location._id}>
                    {location.name}
                  </option>
                )}
              </>
            ))}
          </select>
          <input type="submit" value="Add to Fishing Spot" />
        </form>
      </div>
    );
  }
}

export default FishLocationForm;