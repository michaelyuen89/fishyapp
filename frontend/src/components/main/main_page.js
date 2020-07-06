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
            </>
        );
    }
}

export default MainPage;