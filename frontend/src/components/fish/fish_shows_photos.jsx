import React from "react";
import FishUploadContainer from './fish_photo_upload_container';

class FishShowsPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fishId: ""
    };
    this.targetFish = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      debugger
    this.props.fetchAllFishes();
    this.props.fetchUserPhotos(this.props.currentUser.id);
    this.props
      .fetchFishPhotos(this.targetFish._id)
      .then(() => this.setState({ fishId: "" }));
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props
//       .fetchFishPhotos(this.state.fishId)
//       .then(() => this.setState({ fishId: "" }));
//   }

  render() {
          this.props.fishes.forEach(fish => {
            if (
              fish.name.toLowerCase().replace(" ", "-") ===
              this.props.match.params.fish_name
            ) {
              this.targetFish = fish;
            }
          });
    return (
      <div className="show-fish-select-container">
        <div className="fish-select-form">
          {/* <h1>Fish Photo Select Form</h1> */}
          {/* <form action="" onSubmit={this.handleSubmit}>
            <select
              value={
                this.state.fishId ? this.state.fishId : "default-select-value"
              }
              onChange={this.handleChange("fishId")}
            >
              <option
                key={"default-select"}
                value="default-select-value"
                disabled
              >
                >>(Select a Fish).>
              </option>
              {this.props.fishes.map(fish => (
                <option key={`${fish._id}`} value={fish._id}>
                  {fish.name}
                </option>
              ))}
            </select>
            <input type="submit" value="See Photos of Fish" />
          </form> */}
        </div>
        <div className="show-fish-top">
          <div className="show-fish-photo-title">
            {this.targetFish.name} Photos!
          </div>
          <FishUploadContainer />
        </div>
        <div className="show-selected-fish-index">
          {this.props.fishPhotos.length > 0 ? (
            <>
              {this.props.fishPhotos.map((fishPhoto) => (
                <div key={fishPhoto._id} className="show-fish-photo">
                  <img src={fishPhoto.fileLink} />
                </div>
              ))}
            </>
          ) : (
            <div>No photos found.</div>
          )}
        </div>
        {/* <h1>Photos of Fish you Uploaded</h1>
        <div className="selected-user-index">
          {this.props.userPhotos.length > 0 ? (
            <>
              {this.props.userPhotos.map(fishPhoto => (
                <div key={fishPhoto._id} className="fish-photo">
                  <img src={fishPhoto.fileLink} />
                </div>
              ))}
            </>
          ) : (
            <div>No photos found.</div>
          )}
        </div> */}
      </div>
    );
  }
}

export default FishShowsPhotos;
