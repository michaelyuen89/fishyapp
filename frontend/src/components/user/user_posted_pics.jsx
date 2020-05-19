import React from "react";
import {Link} from 'react-router-dom';

class UserPostedPics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fishId: ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllFishes();
        this.props.fetchUserPhotos(this.props.currentUser.id);
    }

    handleDelete(photoId) {
        return (e) => this.props.deletePhoto(photoId);
    }

    render() {
        if (!this.props.fishes || !this.props.userPhotos) return null;
        return (
          <div className="fish-select-container">
            {/* <div className="fish-select-form">
                    <h1>Fish Photo Select Form</h1>
                    <form action="" onSubmit={this.handleSubmit}>
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
                            {this.props.fishes.map((fish) => (
                                <option key={`${fish._id}`} value={fish._id}>
                                    {fish.name}
                                </option>
                            ))}
                        </select>
                        <input type="submit" value="See Photos of Fish" />
                    </form>
                </div>
                <h1>Photos of Selected Fish</h1>
                <div className="selected-fish-index">
                    {this.props.fishPhotos.length > 0 ? (
                        <>
                            {this.props.fishPhotos.map((fishPhoto) => (
                                <div key={fishPhoto._id} className="fish-photo">
                                    <img src={fishPhoto.fileLink} />
                                </div>
                            ))}
                        </>
                    ) : (
                            <div>No photos found.</div>
                        )}
                </div> */}
            <h1>
              Hello, {this.props.currentUser.username}. Here are the photos of catches uploaded by you!
            </h1><br/>
            <div className="selected-user-index">
              {this.props.userPhotos.length > 0 ? (
                <>
                  {this.props.userPhotos.map((fishPhoto) => {
                    debugger
                    return (
                      <div key={fishPhoto._id} className="fish-photo album">
                        <div className="photo-info has-photos">
                          <div>
                            <Link
                              to={`/fishes/${this.props.fishes[
                                fishPhoto.fish
                              ].name
                                .toLowerCase()
                                .split(" ")
                                .join("-")}`}
                            >
                              {this.props.fishes[fishPhoto.fish].name}
                            </Link>
                            {` caught on ${fishPhoto.createdAt.split("T")[0]}`}
                          </div>
                          <div>
                              <button onClick={this.handleDelete(fishPhoto._id)}>
                                  Delete Photo
                              </button>
                          </div>
                        </div>
                        <Link
                          to={`/fishes/${this.props.fishes[fishPhoto.fish].name
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                        >
                          <img src={fishPhoto.fileLink} />
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="photo-info">
                    No photos found. Show off your catches by adding photos for fish&nbsp;<Link to={`/fishes`}>here</Link>.
                </div>
              )}
            </div>
          </div>
        );
    }
}

export default UserPostedPics;
