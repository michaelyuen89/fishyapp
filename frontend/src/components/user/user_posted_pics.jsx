import React from "react";

class UserPostedPics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fishId: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllFishes();
        this.props.fetchUserPhotos(this.props.currentUser.id);
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchFishPhotos(this.state.fishId)
            .then(() => this.setState({ fishId: "" }))
    }

    render() {
        return (
            <div className="fish-select-container">
                <div className="fish-select-form">
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
                </div>
                <h1>Photos of Fish you Uploaded</h1>
                <div className="selected-user-index">
                    {this.props.userPhotos.length > 0 ? (
                        <>
                            {this.props.userPhotos.map((fishPhoto) => (
                                <div key={fishPhoto._id} className="fish-photo">
                                    <img src={fishPhoto.fileLink} />
                                </div>
                            ))}
                        </>
                    ) : (
                            <div>No photos found.</div>
                        )}
                </div>
            </div>
        );
    }
}

export default UserPostedPics;
