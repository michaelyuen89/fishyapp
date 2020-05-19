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
            <div className="team-page-section">
              <div className="team-page-title">Meet our team!</div>

              <div className="team-member-container">
                <div className="team-member-picture">
                  <img src={eli} alt="team-member-elijah" />
                </div>
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Elijah Nam</div>
                    <div className="team-member-role">Frontend Engineer</div>
                  </div>

                  <div className="team-member-op">
                    <a target="_blank" href="https://github.com/Sunghan11">
                      Github
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/elijah-nam-6a412b25/"
                    >
                      LinkedIn
                    </a>
                    <a target="_blank" href="https://angel.co/u/elijah-nam">
                      AngelList
                    </a>
                  </div>

                  <div className="team-member-overview-container">
                    <div className="team-member-overview-title">About me!</div>
                    <div className="team-member-overview"></div>
                  </div>
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Huijia "Emily" Wu</div>
                    <div className="team-member-role">Chief Engineer</div>
                  </div>

                  <div className="team-member-op">
                    <a target="_blank" href="https://github.com/emikyu">
                      Github
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/huijiawu/"
                    >
                      LinkedIn
                    </a>
                    <a target="_blank" href="https://angel.co/u/h-emily-wu">
                      AngelList
                    </a>
                  </div>

                  <div className="team-member-overview-container">
                    <div className="team-member-overview-title">About me!</div>
                    <div className="team-member-overview"></div>
                  </div>
                </div>
                <div className="team-member-picture">
                  <img src={emily} alt="team-member-elijah" />
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-picture">
                  <img src={joe} alt="team-member-elijah" />
                </div>
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Joe Xiao</div>
                    <div className="team-member-role">Flex Engineer</div>
                  </div>

                  <div className="team-member-op">
                    <a target="_blank" href="https://github.com/joexiao97">
                      Github
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/joe-xiao-8a5669109/"
                    >
                      LinkedIn
                    </a>
                    <a target="_blank" href="https://angel.co/u/joe-xiao">
                      AngelList
                    </a>
                  </div>

                  <div className="team-member-overview-container">
                    <div className="team-member-overview-title">About me!</div>
                    <div className="team-member-overview"></div>
                  </div>
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Michael</div>
                    <div className="team-member-role">Project Manager</div>
                  </div>

                  <div className="team-member-op">
                    <a target="_blank" href="https://github.com/michaelyuen89">
                      Github
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/michael-yuen-a7248894/"
                    >
                      LinkedIn
                    </a>
                    <a target="_blank" href="https://angel.co/u/michael-yuen-4">
                      AngelList
                    </a>
                  </div>

                  <div className="team-member-overview-container">
                    <div className="team-member-overview-title">About me!</div>
                    <div className="team-member-overview"></div>
                  </div>
                </div>
                <div className="team-member-picture">
                  <img src={mike} alt="team-member-elijah" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TeamPage;