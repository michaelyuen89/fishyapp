import React from 'react';
import "./user_page.css";
import UserFishContainer from "./user_fish_container";
import UserPostedPicsContainer from "./user_posted_pics_container";
import backgroundImage from '../background_image.jpg'

class UserPage extends React.Component {


    render() {
        return (
            <div className="user-show-page-cont">
                <img src={backgroundImage} alt="background" />
                <div className="user-show-info-cont">
                    <div className="user-show-info">
                        <div className="user-show-username">{this.props.currentUser.username}</div>
                        <br/>
                        <div className="user-show-location">Location: New York, NY</div>
                        <br />
                        <div className="user-show-favorite-fish">Favorite Fish: Whale Shark</div>
                        <br />
                        <div className="user-show-favorite-location">Favorite Fishing Spot: Seaworld</div>
                        <br />
                        <div className="user-show-gear">Gear: Daiwa Minispin Ultralight Spinning Reel and Rod, Nimbus2000, Lixada Multi Jointed Fishing Lures</div>
                        <br/>
                        <div className="user-show-comments">Comments: Hi!</div>
                    </div>
                    <div className="user-show-comments-cont">
                        <div className="user-show-comments-form">
                            <form>
                                <textarea name="comment" id="comment-box" cols="65" rows="20">

                                </textarea>
                            </form>
                        </div>
                        <input className="comment-button" type="submit" value="Add Comment"/>
                    </div>
                </div>
                <div className="user-posted-pictures">
                    <UserPostedPicsContainer />
                </div>
            </div>
        )
    }
}

export default UserPage;