import React from "react";

class FishPhotoUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      file: null,
    };

    this.targetFish= {};

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    this.fileInput = React.createRef();
  }

  componentDidMount() {
    this.props.fetchAllFishes();
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value,
      file: e.target.files[0]
    });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleUpload(e) {
    e.preventDefault();
    // debugger
    const data = new FormData(e.target);
    data.append(
      "file",
      this.state.file,
      this.state.description,
      this.targetFish._id
    );
    data.append("fishId", this.targetFish._id);
    // debugger
    this.props.uploadPhoto(data).then(() => {
      this.setState({
        description: "",
        file: null,
        fishId: ""
      });
      this.fileInput.current.value = null;
      window.location.reload(false);
    });
  }

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
      <div className="fish-photo-upload-form">
      <h1>Upload a {this.targetFish.name} picture!</h1>
        <div>
          <form action="" onSubmit={this.handleUpload}>
            {/* <select
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
            </select> */}
            <br />
            <input
              type="file"
              onChange={this.handleFile}
              ref={this.fileInput}
            />
            <br />
            {/* <input
              type="text"
              value={this.state.description}
              placeholder="Filename"
              onChange={this.handleChange("description")}
            /> */}
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    );
  }
}

export default FishPhotoUpload;
