import React from 'react';
import NavbarContainer from "../nav/navbar_container";
import splashImage from "../main/splash_image.jpg";
import "./fish_show.css";
import Map from '../map/map';
import fishyPic from "./fishy.jpg"
import noFish from "./nofish.jpg"

class FishShow extends React.Component {

    constructor(props){
        super(props);
        this.targetFish = {};
    }
    
    componentDidMount(){
        this.props.fetchAllFishes();
    }

    render(){
        Object.values(this.props.fishes).forEach((fish) => {
            if(fish.name.toLowerCase().replace(" ", "-") === this.props.match.params.fish_name){
                this.targetFish = fish;
            }
        })
        // debugger
        if (Object.values(this.targetFish).length === 0) {
          return (
            <>
              <div className="no-fish-page">
                <div className="no-fish-text">Fish does not exist!</div>
                <div className="fish-wrap">
                  <img
                    className="no-fish-pic"
                    src={noFish}
                    alt="No fish picture"
                  />
                </div>
              </div>
              <footer>
                <div className="footer-links">
                  <div className="footer-github">
                    <ul>
                      {" "}
                      Github:
                      <li><a href="https://github.com/michaelyuen89/fishyapp">fishyapp</a></li>
                      {/* <li>
                        <a href="https://github.com/Sunghan11">Elijah Nam</a>
                      </li>
                      <li>
                        <a href="https://github.com/emikyu">Emily Wu</a>
                      </li>
                      <li>
                        <a href="https://github.com/joexiao97">Joe Xiao</a>
                      </li>
                      <li>
                        <a href="https://github.com/michaelyuen89">
                          Michael Yuen
                        </a>
                      </li> */}
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
              <div className="fish-show-page">
                <div className="fish-show-text">
                  <div className="fish-show-name">{this.targetFish.name}</div>
                  <div className="fish-show-info">
                    {/* <span>Description</span>
                    <div className="fish-show-description">
                      {this.targetFish.description}
                    </div> */}
                    <div className="fish-show-size">
                      <span>Min Legal Size</span>
                      <div className="fish-show-size-min">
                        {this.targetFish.minLegalSize}
                      </div>
                      <span>Max Legal Size</span>
                      <div className="fish-show-size-max">
                        {this.targetFish.maxLegalSize}
                      </div>
                    </div>
                    <span>Max Allowed Amount</span>
                    <div className="fish-show-max">
                      {this.targetFish.maxPossession}
                    </div>
                  </div>

                  <div>
                    <img className="fish-show-img" src={fishyPic} alt="Fish display picture" />
                  </div>

                  <div className="fish-show-desc-box">
                    <div className="fish-show-desc">Description</div>
                    <div className="fish-show-description">
                      {this.targetFish.description}
                    </div>
                  </div>
                </div>

                <div className="fish-gmaps-section">
                  <Map />
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
                        <a href="https://github.com/michaelyuen89">
                          Michael Yuen
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