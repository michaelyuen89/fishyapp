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
        <div>
          <form action="" onSubmit={this.handleUpload}>
            <span className="add-photo">Add a Photo!</span>
            <input
              type="file"
              onChange={this.handleFile}
              ref={this.fileInput}
            />
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    );
  }
}

export default FishPhotoUpload;
