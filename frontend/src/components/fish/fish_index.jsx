import React from 'react';
import NavbarContainer from "../nav/navbar_container";
import splashImage from "../main/splash_image.jpg";
import "./fish_index.css";
import Map from '../map/map';
import { Link } from "react-router-dom";

class FishIndex extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllFishes();
    }

    render(){
        if(!this.props.fishes){
            return(<div></div>)
        }
        const fishes = Object.values(this.props.fishes)
        return (
          <>
            <div className="fish-index-page">
              <img src={splashImage} />
              <div className="all-fish-title">
                Here is a list of all fishes!
              </div>

              <div className="all-fish-list">
                <div className="all-fish-info-header">
                  <div className="fish-name">Fish Name</div>
                  <div className="fish-description">Description</div>
                  <div className="fish-min-legal">Min Size</div>
                  <div className="fish-max-legal">Max Size</div>
                  <div className="fish-max-possess">Possession Limit</div>
                </div>
                {fishes.map(fish => (
                  <div className="all-fish-info" key={fish.name}>
                    <Link
                      className="fish-name-li"
                      to={`/fishes/${fish.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {fish.name}
                    </Link>
                    <div className="fish-description">{fish.description}</div>
                    <div className="fish-min-legal">{fish.minLegalSize}</div>
                    <div className="fish-max-legal">{fish.maxLegalSize}</div>
                    <div className="fish-max-possess">{fish.maxPossession}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="all-fish-title">
              Use the map below to find the nearest places with you favorite
              fish!{" "}
            </div>
            <div className="fish-index-map">
              <Map />
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
    }
}

export default FishIndex;