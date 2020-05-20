import React from 'react';
import {withRouter , Link} from 'react-router-dom';
import './login_form.css';
import signupImage from "./signup_background.png";

const demoUser = {
  email: "seabassmaster@gmail.com",
  password: "password"
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/fishes');
        }

        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    loginDemo(e) {
      this.props.login(demoUser);
    }

    close_modal(){
        var modal = document.getElementById("login-modal");
        modal.style.display = "none";
    }



    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="user-errors">
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
          <div className="outer-container" id="login-modal">
            <img src={signupImage} id="signup-background-img" alt="login"/>
            <div className="login-form-container">
                <div className="login-form">
              <form onSubmit={this.handleSubmit}>
                  <br />
                  <h2 id="signup-header">Login</h2>
                  <br />
                  <div id="signup-fish-logo">
                    <i className="fas fa-fish fa-5x"></i>
                  </div>
                  <br />
                  <div className="login-form-group">
                    <input
                      className="login-input"
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                    />
                    <br />
                    <input
                      className="login-input"
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      placeholder="Password"
                    />
                    <br />
                  </div>
                  <div className="user-errors-container">
                    {this.renderErrors()}
                  </div>
                  <div id="submit-button">
                    <input type="submit" value="Log in" />
                  </div><br/>
              </form>
                  <button className="submit-button" onClick={this.loginDemo}>
                    Demo user
                  </button>
                  <br />
                  <br />
                  <div id="switch-login-signup">
                    <span>New to FishyDex? </span>
                    <Link className="signup-link" to="/signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        );
    }
}

export default withRouter(LoginForm);