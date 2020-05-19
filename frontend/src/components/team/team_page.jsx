import React from 'react';
import "./team_page.css";
import "./joe.jpg";
import "./elijah.jpg";
import "./emily.jpg";
import "./mike.jpg";

class TeamPage extends React.Component {


    render() {
        return (
            <div className="team-page-container">
                {/* <div> */}
                    <span>Meet our team!</span>
                    <div className="team-member">
                        Elijah
                    </div>
                    <div className="team-member">
                        Emily
                    </div>
                    <div className="team-member">
                        Joe
                    </div>
                    <div className="team-member">
                        Michael
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default TeamPage;