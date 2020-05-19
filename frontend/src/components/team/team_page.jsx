import React from 'react';
import "./team_page.css";
import joe from "./joe.jpg";
import eli from "./elijah.jpg";
import emily from "./emily.jpg";
import mike from "./mike.jpg";

class TeamPage extends React.Component {


    render() {
        return (
          <div className="team-page-container">
            <div className="team-page-title">Meet our team!</div>

            <div className="team-member-container">
              <div className="team-member-picture">
                <img src={eli} alt="team-member-elijah" />
              </div>
              <div className="team-member-info">
                <div className="team-member-name">Elijah</div>
                <div className="team-member-op">
                  <a target="_blank" href="https://github.com/Sunghan11">Github</a>
                  <a target="_blank" href="https://www.linkedin.com/in/elijah-nam-6a412b25/">LinkedIn</a>
                  <a target="_blank" href="https://angel.co/u/elijah-nam">AngelList</a>
                </div>
              </div>
            </div>

            <div className="team-member">Emily</div>
            <div className="team-member">Joe</div>
            <div className="team-member">Michael</div>
          </div>
        );
    }
}

export default TeamPage;