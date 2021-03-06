import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchBarContainer from '../search_bar/search_bar_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="nav-links logged-in">
                    <div className="nav-links-left">
                        <div>
                            <Link to={'/album'}>Album</Link>
                        </div>
                        <div>
                            <Link to={'/fishes'}>All fish</Link>
                        </div>
                        <div>
                            <Link to={'/new_fish'}>Add a fish</Link>
                        </div>
                        <div>
                            <Link to={'/location'}>Location</Link>
                        </div>
                    </div>
                    <SearchBarContainer />
                    <div className="nav-links-right">
            {/* <Link to={'/profile'}>Welcome, {this.props.currentUser.username}!</Link> */}
                        <a onClick={this.logoutUser}>Logout</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="nav-links logged-out">
                    <div className="nav-links-left">
                    </div>
                    <div className="nav-links-right">
                        <Link to={'/signup'}>Sign up</Link>
                        <Link to={'/login'}>Log in</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
          <div className="navbar-container">
            <div className="navbar-logo">
              <i className="fas fa-fish"></i>
              <Link to={"/"}>
                <span className="fishydex-logo">FishyDex</span>
              </Link>
            </div>
            {this.getLinks()}
          </div>
        );
    }
}

export default NavBar;