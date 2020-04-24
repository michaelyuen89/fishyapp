import React from 'react';
import "./user_page.css";
import UserFishContainer from "./user_fish_container";
import UserPostedPicsContainer from "./user_posted_pics_container";

class UserPage extends React.Component {


    render() {

        return (
            <div className="user-show-page-cont">
                <div className="user-show-name">User name placeholder</div>
                <div className="user-posted-pictures">User's posted pictures placeholder
                <UserPostedPicsContainer />
                </div>
            </div>
        )
    }
}

export default UserPage;