import React from "react";

class FishPhotoSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        fishId: ""
    }
  }

  componentDidMount() {
    this.props.fetchAllFishes();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {

  }

  render() {
    return (
      <div className="fish-select-form">
        <h1>Fish Photo Select Form</h1>
        <div>
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
            <br />
            <input
              type="file"
              onChange={this.handleFile}
              ref={this.fileInput}
            />
            <br />
            <input
              type="text"
              value={this.state.description}
              placeholder="Filename"
              onChange={this.handleChange("description")}
            />
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    );
  }
}

export default FishPhotoSelect;
