import React from 'react';
import splashImage from './splash_image.jpg';
import { Link } from 'react-router-dom';
import './main.css';

class MainPage extends React.Component {

    render() {
        return (
            <>
                <div className="main-page-container">
                    <img src={splashImage} alt="splash" />
                    <div>
                        <h1 className="splash-hook">A Fisher's App</h1>
                        <div className="splash-slogan">From the team that brought you Map Fish to Docks (and nekobook),<br/>
                        discover the one-stop fishing information destination for<br/> professionals, enthusiasts, and amateurs alike</div>
                    </div>
                </div>
                <footer>
                    <div className="footer-links">
                        <div className="footer-github">
                            <ul> Github:
                                <li><a href="https://github.com/michaelyuen89/fishyapp">fishyapp</a></li>
                                {/* <li><a href="https://github.com/Sunghan11">Elijah Nam</a></li>
                                <li><a href="https://github.com/emikyu">Emily Wu</a></li>
                                <li><a href="https://github.com/joexiao97">Joe Xiao</a></li>
                                <li><a href="https://github.com/michaelyuen89">Michael Yuen</a></li> */}
                            </ul>
                            <ul>
                                <Link to="/team_page">Team Members</Link>
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

export default MainPage;