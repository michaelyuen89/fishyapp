import React from 'react';
import './fish_location_form.css';

class FishLocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fishId: this.props.fishId,
      locationId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLocations();
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.targetFish.locationIds.length !== this.props.targetFish.locationIds.length) {
    //   this.props.fetchAllLocations();
    // }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props
      .editFish({id: this.state.fishId, locationIds: this.props.targetFish.locationIds.concat(this.state.locationId)})
      .then(() =>
        this.props.editLocation({id: this.state.locationId, fishIds: this.props.locations[this.state.locationId].fishIds.concat(this.state.fishId)})
          .then(() => {
              this.setState({ locationId: "" });
                window.location.reload(false);
          })
      );
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
            value={this.state.locationId ? this.state.locationId : "default-select-value"}
            onChange={this.handleChange("locationId")}
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