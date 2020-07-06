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
                <div className="team-member-picture-left">
                  <img src={eli} alt="team-member-elijah-nam" />
                </div>

                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Elijah Nam</div>
                    <div className="team-member-role">Frontend Engineer</div>
                  </div>

                  <div className="team-member-overview-wrapper">
                    <div className="team-member-overview-container">
                      <div className="team-member-overview-title">
                        About me!
                      </div>
                      <div className="team-member-overview">
                        <div className="overview-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>

                    <div className="team-member-op">
                      <a target="_blank" href="https://github.com/Sunghan11">
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/elijah-nam-6a412b25/"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a target="_blank" href="https://angel.co/u/elijah-nam">
                        <i className="fab fa-angellist"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Huijia "Emily" Wu</div>
                    <div className="team-member-role">Chief Engineer</div>
                  </div>

                  <div className="team-member-overview-wrapper">
                    <div className="team-member-op">
                      <a target="_blank" href="https://github.com/emikyu">
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/huijiawu/"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a target="_blank" href="https://angel.co/u/h-emily-wu">
                        <i className="fab fa-angellist"></i>
                      </a>
                    </div>

                    <div className="team-member-overview-container">
                      <div className="team-member-overview-title">About me!</div>
                      <div className="team-member-overview">
                        <div className="overview-text">
                          I am a software engineer in New York, NY. Recently, I
                          have developed projects using Ruby, Rails,
                          React/Redux, Javascript, jQuery, Express, SQL,
                          MongoDB, HTML, and CSS3, showcased on my
                          Github/LinkedIn. Check them out!
                          <br />
                          <br />
                          Prior to being a software engineer, I worked for three
                          years as a management consultant at McKinsey &
                          Company. Although I appreciated my time at McKinsey,
                          I've always been passionate about programming -- from
                          building websites in middle school to self-teaching
                          Python in my downtime.
                          <br />
                          <br />
                          In Jan 2020, I left McKinsey and enrolled in App
                          Academy (a 16-week intensive full-stack web
                          development bootcamp) to focus on being a full-fledged
                          software engineer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-member-picture-right">
                  <img src={emily} alt="team-member-emily-wu" />
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-picture-left">
                  <img src={joe} alt="team-member-joe-xiao" />
                </div>
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Joe Xiao</div>
                    <div className="team-member-role">Flex Engineer</div>
                  </div>
                  <div className="team-member-overview-wrapper">
                    <div className="team-member-overview-container">
                      <div className="team-member-overview-title">
                        About me!
                      </div>
                      <div className="team-member-overview">
                        <div className="overview-text">
                          Hello! My name is Joe and I am a Software Engineer
                          based in NYC with experience in Ruby, Ruby on Rails,
                          JavaScript, React/Redux, HTML, and CSS. 
                          <br/>
                          <br/>
                          I was always
                          fascinated by how technology was able to connect many
                          different people together, which led me to getting a
                          degree in Computer Science. I love programming,
                          problem solving, and learning new technologies! Things
                          I enjoy doing on my free time are fishing/spending
                          time with my family, playing video games, and watching
                          anime! If given the chance, my dream would be to
                          travel the world to experience different cultures!
                          <br/>
                          <br/>
                           I
                          recently enrolled and completed App Academy, a 16 week
                          intensive 1000+ hour full-stack web development
                          bootcamp, to reinforce and build upon what I learned.
                          Some of my featured projects are featued on my LinkedIn/Github, check them
                          out!
                        </div>
                      </div>
                    </div>

                    <div className="team-member-op">
                      <a target="_blank" href="https://github.com/joexiao97">
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/joe-xiao-8a5669109/"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a target="_blank" href="https://angel.co/u/joe-xiao">
                        <i className="fab fa-angellist"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-member-container">
                <div className="team-member-info">
                  <div className="team-member-header">
                    <div className="team-member-name">Michael Yuen</div>
                    <div className="team-member-role">Project Manager</div>
                  </div>

                  <div className="team-member-overview-wrapper">
                    <div className="team-member-op">
                      <a
                        target="_blank"
                        href="https://github.com/michaelyuen89"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/michael-yuen-a7248894/"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://angel.co/u/michael-yuen-4"
                      >
                        <i className="fab fa-angellist"></i>
                      </a>
                    </div>

                    <div className="team-member-overview-container">
                      <div className="team-member-overview-title">
                        About me!
                      </div>
                      <div className="team-member-overview">
                        <div className="overview-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-member-picture-right">
                  <img src={mike} alt="team-member-michael-yuen" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TeamPage;