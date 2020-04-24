import React from 'react';
import NavbarContainer from "../nav/navbar_container";
import splashImage from "../main/splash_image.jpg";
import "./fish_show.css";
import Map from '../map/map';
import fishyPic from "./fishy.jpg"
import noFish from "./nofish.jpg"
import FishUploadContainer from "./fish_photo_upload_container";
import FishShowsPhotosContainer from "./fish_shows_photos_container";
import FishLocationFormContainer from './fish_location_form_container';


class FishShow extends React.Component {
  constructor(props) {
    super(props);
    this.targetFish = {};
    this.state = {
    //   description: "",
    //   file: null,
      tFish: {},
    };
    // this.handleFile = this.handleFile.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);

    // this.fileInput = React.createRef();
  }

  componentDidMount() {
    this.props.fetchAllFishes()
    .then((e)=>{
          this.props.fishes.forEach(fish => {
            // debugger
            if (
              fish.name.toLowerCase().replace(" ", "-") ===
              this.props.match.params.fish_name
            ) {
              debugger
              this.props.fetchFishPhotos(fish._id).then(() => {
                console.log(this)
              })
            }
          });
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.fish_name !== this.props.match.params.fish_name) {
      this.props.fetchAllFishes()
        .then((e) => {
          this.props.fishes.forEach(fish => {
            // debugger
            if (
              fish.name.toLowerCase().replace(" ", "-") ===
              this.props.match.params.fish_name
            ) {
              debugger
              this.props.fetchFishPhotos(fish._id).then(() => {
                console.log(this)
              })
            }
          });
        })
      }
  }

  // handleFile(e) {
  //   e.preventDefault();
  //   this.setState({
  //     description: e.target.value,
  //     file: e.target.files[0]
  //   });
  // }

  // handleChange(field) {
  //   return e => this.setState({ [field]: e.target.value });
  // }

  // handleUpload(e) {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   debugger
  //   data.append(
  //     "file",
  //     this.state.file,
  //     this.state.description,
  //     this.targetFish._id
  //   );
  //   data.append("fishId", this.targetFish.id);
  //   this.props.uploadPhoto(data).then(() => {
  //     this.setState({
  //       description: "",
  //       file: null,
  //       fishId: ""
  //     });
  //     this.fileInput.current.value = null;
  //     window.location.reload(false);
  //   });
  // }

  render() {
      Object.values(this.props.fishes).forEach(fish => {
        if (
          fish.name.toLowerCase().replace(" ", "-") ===
          this.props.match.params.fish_name
        ) {
          this.targetFish = fish;
        }
      });
    if (Object.values(this.targetFish).length === 0) {
      return (
        <>
          <div className="no-fish-page">
            <div className="no-fish-text">Fish does not exist!</div>
            <div className="fish-wrap">
              <img className="no-fish-pic" src={noFish} alt="No fish picture" />
            </div>
          </div>
          <footer>
            <div className="footer-links">
              <div className="footer-github">
                <ul>
                  {" "}
                  Github:
                  <li>
                    <a href="https://github.com/michaelyuen89/fishyapp">
                      fishyapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright">
              Copyright &copy; 2020 Fishers
            </div>
          </footer>
        </>
      );
    } else {
      return (
        <>
          <div className="fish-index-page main-page-container">
            <img src={splashImage} />
            <div>
              <div className="fish-show-name ">{this.targetFish.name}</div>
              <div className="fish-show-page ">
                <div className="fish-left">
                  <div className="fish-show-text">
                    <div className="fish-show-img">
                      <img
                        src={
                          this.props.fishPhotos[0]
                            ? this.props.fishPhotos[0].fileLink
                            : noFish
                        }
                        alt={this.targetFish.name}
                      />
                    </div>
                    <div className="fish-show-info">
                      <div key="fish-show-size" className="fish-show-size">
                        <div key="one">
                          <span>Min Legal Size: </span>
                          {this.targetFish.minLegalSize
                            ? this.targetFish.minLegalSize
                            : "None"}
                        </div>
                        <div key="two">
                          <span>Max Legal Size: </span>
                          {this.targetFish.maxLegalSize
                            ? this.targetFish.maxLegalSize
                            : "None"}
                        </div>
                        <div key="three">
                          <span>Max Allowed Amount: </span>
                          {this.targetFish.maxPossession
                            ? this.targetFish.maxPossession
                            : "None"}
                        </div>
                        <div key="four">
                          <span>Description: </span>
                          {this.targetFish.description
                            ? this.targetFish.description
                            : "No description provided"}
                        </div>
                        <FishLocationFormContainer
                          key="fish-location-form-container"
                          fishId={this.targetFish._id}
                          fish={this.targetFish}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fish-gmaps-section">
                  <div>Places to fish for {this.targetFish.name}:</div>
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <FishShowsPhotosContainer />
          {/* <FishUploadContainer /> */}

          <footer>
            <div className="footer-links">
              <div className="footer-github">
                <ul>
                  {" "}
                  Github:
                  <li>
                    <a href="https://github.com/michaelyuen89/fishyapp">
                      fishyapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright">
              Copyright &copy; 2020 Fishers
            </div>
          </footer>
        </>
      );
    }
  }
}

export default FishShow;