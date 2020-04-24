import React from 'react';
import NavbarContainer from "../nav/navbar_container";
import splashImage from "../main/splash_image.jpg";
import "./fish_show.css";
import Map from '../map/map';
import fishyPic from "./fishy.jpg"
import noFish from "./nofish.jpg"
import FishUploadContainer from "./fish_photo_upload_container";
import FishShowsPhotosContainer from "./fish_shows_photos_container";

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
                    <a href="https://github.com/Sunghan11">Elijah Nam</a>
                  </li>
                  <li>
                    <a href="https://github.com/emikyu">Emily Wu</a>
                  </li>
                  <li>
                    <a href="https://github.com/joexiao97">Joe Xiao</a>
                  </li>
                  <li>
                    <a href="https://github.com/michaelyuen89">Michael Yuen</a>
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
          {/* <div className="photo-upload-form">
            <h1>Photo Upload Form</h1>
            <div>
              <form action="" onSubmit={this.handleUpload}>
                <br />
                <input
                  type="file"
                  onChange={this.handleFile}
                  ref={this.fileInput}
                />
                <br />
                <input type="submit" value="Upload" />
              </form>
            </div>
          </div> */}
          <div className="fish-show-page">
            <div className="fish-left">
            <div className="fish-show-name">{this.targetFish.name}</div>
            <div className="fish-show-text">
              <div className="fish-show-info">
                {/* <span>Description</span>
                    <div className="fish-show-description">
                      {this.targetFish.description}
                    </div> */}
                <div className="fish-show-size">
                  <span>Min Legal Size: </span>
                  {/* <div className="fish-show-size-min"> */}
                    {this.targetFish.minLegalSize ? this.targetFish.minLegalSize : "None"}
                  {/* </div> */}
                  <span>Max Legal Size: </span>
                  <div className="fish-show-size-max">
                    {this.targetFish.maxLegalSize}
                  </div>
                </div>
                <span>Max Allowed Amount: </span>
                <div className="fish-show-max">
                  {this.targetFish.maxPossession}
                </div>
              </div>

              <div>
                <img
                  className="fish-show-img"
                  src={this.props.fishPhotos[0] ? this.props.fishPhotos[0].fileLink : noFish}
                  alt="Fish display picture"
                />
              </div>

              <div className="fish-show-desc-box">
                <div className="fish-show-desc">Description</div>
                <div className="fish-show-description">
                  {this.targetFish.description}
                </div>
              </div>
            </div>
            </div>
            <div className="fish-gmaps-section">
              <Map />
            </div>
          </div>
          <FishShowsPhotosContainer />
          <FishUploadContainer />

          <footer>
            <div className="footer-links">
              <div className="footer-github">
                <ul>
                  {" "}
                  Github:
                  <li>
                    <a href="https://github.com/Sunghan11">Elijah Nam</a>
                  </li>
                  <li>
                    <a href="https://github.com/emikyu">Emily Wu</a>
                  </li>
                  <li>
                    <a href="https://github.com/joexiao97">Joe Xiao</a>
                  </li>
                  <li>
                    <a href="https://github.com/michaelyuen89">Michael Yuen</a>
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